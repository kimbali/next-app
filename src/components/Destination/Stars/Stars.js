import React from 'react';
import styles from './Stars.module.scss';
import { Icon } from 'semantic-ui-react';
import classNames from 'classnames';

export function Stars({ data }) {
  if (!data) return;
  return (
    <div className={styles.stars}>
      {Object.entries(data).map((element, index) => (
        <div key={index} className={styles.line}>
          <p className='bold'>{element[0]}</p>

          <div>
            {Array(5)
              .fill(null)
              .map((ele, j) => (
                <Icon
                  key={`star${j}`}
                  name='star'
                  color='yellow'
                  size='large'
                  className={classNames(styles.star, {
                    [styles.inactive]: element[1] <= j,
                  })}
                />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}
