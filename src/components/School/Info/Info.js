import React, { useEffect, useState } from 'react';
import { Container, Image, Icon } from 'semantic-ui-react';
import styles from './Info.module.scss';
import { marked } from 'marked';
import { Separator } from '@/components/Shared';
import { CircleFlag } from 'react-circle-flags';
import { scrollToElement } from '@/utils/functions/scrollToElement';
import Link from 'next/link';

const servicesList = {
  wifi: { logo: 'wifi', label: 'Wifi' },
  bar: { logo: 'cocktail', label: 'Bar' },
  lockers: { logo: 'lock', label: 'Taquillas' },
  shop: { logo: 'gift', label: 'Tienda' },
  showers: { logo: 'shower', label: 'Dutxas' },
  parking: { logo: 'car', label: 'Parking' },
};

export function Info(props) {
  const { school } = props;
  const [description, setDescription] = useState();

  useEffect(() => {
    setDescription(marked(school.description));
  }, []);

  const handleScroll = e => {
    e.preventDefault();
    scrollToElement('mapa');
  };

  if (!school) return;
  return (
    <Container className={`${styles.info}`}>
      <div className='side big-small'>
        <div>
          <div className='side'>
            <Image
              className={styles.logo}
              src={`${process.env.NEXT_PUBLIC_SERVER_HOST}${school.logo.data.attributes.url}`}
            />

            <div>
              <p>Aqui hablamos</p>

              <div className={styles.languages}>
                {Object.entries(school.languages).map(
                  ([countryCode, exists]) =>
                    countryCode !== 'id' &&
                    !!exists && (
                      <div className={styles.language} key={countryCode}>
                        <CircleFlag countryCode={countryCode} height='25' />
                        <p>{countryCode}</p>
                      </div>
                    )
                )}
              </div>

              <Separator height={24} />

              <a href='#mapa' onClick={handleScroll}>
                Dónde estamos
              </a>
            </div>
          </div>

          <Separator height={24} />

          <h2>Sobre la escuela</h2>

          <Separator height={12} />

          <div
            className='markdown'
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>

        <div className={styles.services}>
          <h2>Servicios</h2>

          <Separator height={12} />

          {Object.entries(school.services).map(
            service =>
              service[0] !== 'id' &&
              !!service[1] && (
                <div className={styles.service}>
                  <Icon key={service[0]} name={servicesList[service[0]].logo} />
                  <p>{servicesList[service[0]].label}</p>
                </div>
              )
          )}
        </div>
      </div>
    </Container>
  );
}
