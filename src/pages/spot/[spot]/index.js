import { Destination } from '@/api';

export { default } from './spot';

export async function getServerSideProps(context) {
  const {
    params: { spot },
  } = context;

  const controller = new Destination();
  const response = await controller.getBySeoUrl(spot);

  return {
    props: {
      destination: response,
    },
  };
}
