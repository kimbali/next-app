import Link from 'next/link';
import { map } from 'lodash';
import { fn } from '@/utils';
import { Label } from '@/components/Shared';
import styles from './GridImages.module.scss';
import { ENV } from '@/utils/constants';

export function GridImages({ data }) {
  return (
    <div className={styles.gridImages}>
      {map(data, ({ id, attributes }) => (
        <Link key={id} href={`/${attributes.seoUrl}`} className={styles.card}>
          <img
            src={`${ENV.SERVER_HOST}${attributes.cover.data.attributes.url}`}
          />

          <p className={styles.title}>{attributes.title}</p>
        </Link>
      ))}
    </div>
  );
}
