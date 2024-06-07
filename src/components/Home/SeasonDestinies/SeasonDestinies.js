import React, { useState, useEffect } from 'react';
import { Destination } from '@/api';
import { Container } from 'semantic-ui-react';
import { GridImages } from '@/components/Shared/GridImages';

const controller = new Destination();

export function SeasonDestinies() {
  const [destinies, setDestinies] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await controller.getAll();
        setDestinies(response.data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  if (!destinies) return null;

  return (
    <Container>
      <h2>Destinos de temporada</h2>

      <GridImages data={destinies} />
    </Container>
  );
}
