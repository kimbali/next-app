import { Container } from 'semantic-ui-react';
import { BasicLayout } from '@/layouts';
import { Home } from '@/components/Home';
import { Separator, BarTrust, BannerAd, Seo } from '@/components/Shared';
import { SeasonDestinies } from '@/components/Home/SeasonDestinies';

const platformsId = {
  playstation: 1,
  xbox: 2,
  nintendo: 3,
  pc: 4,
};

export default function HomePage() {
  return (
    <>
      <Seo />

      <BasicLayout>
        <Separator height={100} />

        <SeasonDestinies />

        <Separator height={100} />

        <Container>
          <h2>¿En qué quieres iniciarte?</h2>
        </Container>

        <Separator height={100} />

        <Container>
          <h2>Ventajas</h2>
        </Container>

        <Separator height={100} />

        <Container>
          <h2>¡Suscríbete!</h2>
        </Container>

        <Separator height={100} />

        <Container>
          <h2>Preguntas frecuentes</h2>
        </Container>

        <Separator height={100} />

        <Container>
          <h2>¡Conecta con nosotros!</h2>
        </Container>

        <Separator height={50} />
      </BasicLayout>
    </>
  );
}
