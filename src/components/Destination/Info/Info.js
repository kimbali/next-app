import React, { useEffect, useState } from 'react';
import { Container } from 'semantic-ui-react';
import styles from './Info.module.scss';
import { marked } from 'marked';
import { ENV } from '@/utils/constants';
import Temperature from './Temperature';
import AIR from '@/scss/icons/air.svg';
import DROP from '@/scss/icons/drop.svg';
import { Separator } from '@/components/Shared';
import { Pills } from '../../Pills';
import { Stars } from '../Stars';
import { Season } from '../Season';
import { GoogleMaps } from '@/components/GoogleMaps';
import { Windy } from '@/components/Windy';

export function Info(props) {
  const { destination } = props;
  const [description, setDescription] = useState();

  useEffect(() => {
    setDescription(marked(destination.description));
  }, []);

  if (!destination) return;
  return (
    <Container className={styles.info}>
      <div className='side big-small'>
        <div>
          <h2>Descubre el Spot</h2>

          <Separator height={12} />

          <div
            className='markdown'
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>

        <div className='center'>
          <img
            src={`${ENV.SERVER_HOST}${destination.picture.data.attributes.url}`}
          />

          <Separator height={42} />

          <div className={styles.clima}>
            <h3>Clima</h3>

            <Temperature
              label={'Temperatura del aire'}
              max={destination.temp_air_high}
              min={destination.temp_air_low}
              icon={AIR}
            />

            <Separator height={14} />

            <Temperature
              label={'Temperatura del agua'}
              max={destination.temp_water_high}
              min={destination.temp_water_low}
              icon={DROP}
            />
          </div>

          <Separator height={42} />

          <div className={styles.pills}>
            <Pills title='Actividades' data={destination.activities} />
            <Pills title='Nivel' data={destination.level} />
            <Pills title='Fondo marino' data={destination.sea_bottom} />
          </div>
        </div>
      </div>

      <Stars data={destination.stars} />

      <Season data={destination.season} />

      <Separator height={42} />

      <div className='side'>
        <GoogleMaps />

        <Windy />
      </div>
    </Container>
  );
}
