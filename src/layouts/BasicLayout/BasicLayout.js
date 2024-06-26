import { Container } from 'semantic-ui-react';
import classNames from 'classnames';
import { TopBar, Footer } from '@/components/Layout';
import styles from './BasicLayout.module.scss';
import { Separator } from '@/components/Shared';

export function BasicLayout(props) {
  const {
    children,
    isOpenSearch = false,
    isContainer = false,
    relative = false,
    marginTop = 100,
  } = props;

  return (
    <>
      <TopBar isOpenSearch={isOpenSearch} />

      <Separator height={marginTop} />

      <Container fluid>
        <main className={classNames({ [styles.relative]: relative })}>
          {isContainer ? <Container>{children}</Container> : children}
        </main>
      </Container>

      <Footer />
    </>
  );
}
