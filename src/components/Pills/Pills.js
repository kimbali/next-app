import React from 'react';
import styles from './Pills.module.scss';

export function Pills({ title = '', data }) {
  return (
    <div className={styles.pill}>
      <h3 className='bold'>{title}</h3>

      <ul>
        {Object.entries(data).map((element, index) => {
          if (!element[1]) return;
          if (element[0] === 'id') return;

          return <li key={index}>{element[0]}</li>;
        })}
      </ul>
    </div>
  );
}
