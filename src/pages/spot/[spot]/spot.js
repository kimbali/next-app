import { BasicLayout } from '@/layouts';
import { Destination } from '@/components/Destination';
import { Separator, Seo } from '@/components/Shared';
import { Container } from 'semantic-ui-react';

export default function DestinationPage(props) {
  const {
    destination: { attributes },
  } = props;
  console.log(attributes);
  return (
    <>
      <Seo title={attributes.title} description={attributes.summary} />

      <BasicLayout marginTop={0}>
        <Destination.HeaderWallpaper
          image={attributes.cover.data.attributes.url}
          title={attributes.title}
        />

        <Separator height={60} />

        <Container>
          <Destination.Schools />
          <h2>¿Qué te podemos ofrecer?</h2>
        </Container>

        <Separator height={30} />

        <Destination.Info destination={attributes} />

        <Separator height={50} />
      </BasicLayout>
    </>
  );
}
