import React from 'react';
import styles from './Info.module.scss';
import Image from 'next/image';

function Temperature({ label, min, max, icon }) {
  return (
    <div className={styles.temperature}>
      <Image src={icon} alt='air' height={30} width={30} />

      <div>
        <p className='bold'>{label}</p>
        <p>
          Entre {min}ºC y {max}ºC
        </p>
      </div>
    </div>
  );
}

export default Temperature;
