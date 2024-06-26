import { School } from '@/api';

export { default } from './school';

export async function getServerSideProps(context) {
  const {
    params: { school },
  } = context;

  const controller = new School();
  const response = await controller.getBySeoUrl(school);

  return {
    props: {
      school: response,
    },
  };
}
