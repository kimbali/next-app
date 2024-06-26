import { BasicLayout } from '@/layouts';
import { Destination } from '@/components/Destination';
import { Separator, Seo } from '@/components/Shared';
import { Container } from 'semantic-ui-react';
import { School } from '@/components/School';
import { Gallery } from '@/components/Media/Gallery';

export default function SchoolPage(props) {
  const {
    school: { attributes },
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
          <School.Info school={attributes} />
        </Container>

        <Separator height={30} />

        <Gallery screenshots={attributes.gallery.data} />

        <Separator height={50} />

        <p>Sports filters</p>
        <p>Cursos</p>
        <p>Alquileres</p>
        <p id='mapa'>Encuentranos</p>

        <Separator height={50} />
      </BasicLayout>
    </>
  );
}
