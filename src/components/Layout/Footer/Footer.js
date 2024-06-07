import Link from 'next/link';
import { Container, Image, Button } from 'semantic-ui-react';
import styles from './Footer.module.scss';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.columns}>
          <div>
            <Link href='/'>
              <Image src='/images/logo_white.png' alt='Bukwave' />
            </Link>
          </div>

          <nav>
            <ul>
              <Link href='#'>Sobre nosotros</Link>
              <Link href='#'>Política de privacidad</Link>
              <Link href='#'>Términos y condiciones</Link>
              <Link href='#'>Aviso Legal</Link>
            </ul>
          </nav>

          <div className={styles.social}>
            <Button as='a' href='#' circular size='large' icon='facebook' />
            <Button as='a' href='#' circular size='large' icon='twitter' />
            <Button as='a' href='#' circular size='large' icon='linkedin' />
            <Button as='a' href='#' circular size='large' icon='youtube' />
          </div>
        </div>

        <div className={styles.copyright}>
          <span>Copyright © 2023 Gaming - All rights reserved</span>
        </div>
      </Container>
    </footer>
  );
}
