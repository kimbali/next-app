import React from 'react';
import styles from './Season.module.scss';
import classNames from 'classnames';
import { Separator } from '@/components/Shared';

export function Season({ data }) {
  const orderedMonths = [
    'enero',
    'febrero',
    'marzo',
    'abril',
    'mayo',
    'junio',
    'julio',
    'agosto',
    'setiembre',
    'octubre',
    'noviembre',
    'diciembre',
  ];

  return (
    <div className={styles.season}>
      <h2 className='center'>Temporada</h2>

      <Separator height={42} />

      <div className={styles.months}>
        {orderedMonths.map(month => (
          <div key={month} className={styles.month}>
            <div
              className={`${styles.gradient} ${styles[data[month].join('-')]}`}
            />

            <p>{month.substring(0, 3)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
