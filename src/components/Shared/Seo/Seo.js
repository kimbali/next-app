import Head from 'next/head';

export function Seo(props) {
  const {
    title = 'Bukwave - clases de kitsurf y clases de surf',
    description = 'Reserva clases de kitesurf y clases de surf en España',
  } = props;

  return (
    <Head>
      <title>{title}</title>
      <meta property='description' content={description} />
    </Head>
  );
}
