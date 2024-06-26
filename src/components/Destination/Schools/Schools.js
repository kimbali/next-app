import React, { useState, useEffect } from 'react';
import { School } from '@/api';
import { Container } from 'semantic-ui-react';
import { GridImages } from '@/components/Shared/GridImages';
import { ENV } from '@/utils';
import { useRouter } from 'next/router';

const controller = new School();

export function Schools() {
  const [schools, setSchools] = useState(null);
  const router = useRouter();

  useEffect(() => {
    (async () => {
      try {
        const response = await controller.getAll();
        setSchools(response.data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  if (!schools) return null;
  return (
    <Container>
      <h2>Eschuelas</h2>

      <GridImages
        data={schools}
        preSeoUrl={`${router.asPath}/${ENV.ROUTES.SCHOOL}`}
      />
    </Container>
  );
}
