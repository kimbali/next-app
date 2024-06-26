import { useState } from 'react';
import { Image } from 'semantic-ui-react';
import { map } from 'lodash';
import Slider from 'react-slick';
import { FullModal } from '@/components/Shared';
import styles from './Gallery.module.scss';
import { ENV } from '@/utils/constants';

export function Gallery(props) {
  const { screenshots } = props;
  const [show, setShow] = useState(false);

  const onOpenClose = () => setShow(prevState => !prevState);

  const settings = {
    dots: true,
    dotsClass: styles.dots,
    infinite: true,
    slidersToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    customPaging: function (index) {
      return (
        <Image
          src={`${process.env.NEXT_PUBLIC_SERVER_HOST}${screenshots[index].attributes.url}`}
        />
      );
    },
  };

  return (
    <>
      <div className={styles.gallery}>
        <div className={styles.grid}>
          {map(screenshots, screenshot => (
            <div className={styles.screenshoot} key={screenshot.id}>
              <Image
                src={`${process.env.NEXT_PUBLIC_SERVER_HOST}${screenshot.attributes.url}`}
                onClick={onOpenClose}
              />
            </div>
          ))}
        </div>
      </div>

      <FullModal show={show} onClose={onOpenClose}>
        <div className={styles.carouselContainer}>
          <Slider {...settings}>
            {map(screenshots, screenshot => (
              <div key={screenshot.id}>
                <Image
                  src={`${process.env.NEXT_PUBLIC_SERVER_HOST}${screenshot.attributes.url}`}
                />
              </div>
            ))}
          </Slider>
        </div>
      </FullModal>
    </>
  );
}
