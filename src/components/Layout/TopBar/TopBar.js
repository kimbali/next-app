import { Image } from 'semantic-ui-react';
import Link from 'next/link';
import { Account } from '../Account';
import { Menu } from '../Menu';
import styles from './TopBar.module.scss';

export function TopBar(props) {
  const { isOpenSearch } = props;

  return (
    <header className={styles.topBar}>
      <div className={styles.left}>
        <Link href='/'>
          <Image src='/images/logo.png' alt='Gaming' />
        </Link>
      </div>

      <nav className={styles.center}>
        <Menu isOpenSearch={isOpenSearch} />
      </nav>

      <div className={styles.right}>
        <Account />
      </div>
    </header>
  );
}
