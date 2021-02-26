import * as React from 'react';
import { Container } from '../Container';
import { Text, styled, Heading } from '../../../dist';

const Grid = styled('div', {
  width: '$full',
  display: 'grid',
  gridTemplateColumns: 'auto 1fr',
  columnGap: '$5',
});

export function Typography() {
  return (
    <Container>
      <Heading as="h2" size="5xl">
        Typography
      </Heading>
      <Grid>
        <Text size="xs">xs</Text>
        <Text size="xs">The five boxing wizards jump quickly.</Text>
        <Text size="sm">sm</Text>
        <Text size="sm">The five boxing wizards jump quickly.</Text>
        <Text size="base">base</Text>
        <Text size="base">The five boxing wizards jump quickly.</Text>
        <Text size="lg" overflow="truncate">lg</Text>
        <Text size="lg" overflow="truncate">The five boxing wizards jump quickly.</Text>
        <Text size="xl">xl</Text>
        <Text size="xl" overflow="truncate">The five boxing wizards jump quickly.</Text>
        <Text size="2xl">2xl</Text>
        <Text size="2xl" overflow="truncate">The five boxing wizards jump quickly.</Text>
        <Text size="3xl">3xl</Text>
        <Text size="3xl" overflow="truncate">The five boxing wizards jump quickly.</Text>
        <Text size="4xl">4xl</Text>
        <Text size="4xl" overflow="truncate">The five boxing wizards jump quickly.</Text>
        <Text size="5xl">5xl</Text>
        <Text size="5xl" overflow="truncate">The five boxing wizards jump quickly.</Text>
        <Text size="6xl">6xl</Text>
        <Text size="6xl" overflow="truncate">The five boxing wizards jump quickly.</Text>
        <Text size="7xl">7xl</Text>
        <Text size="7xl" overflow="truncate">The five boxing wizards jump quickly.</Text>
        <Text size="8xl">8xl</Text>
        <Text size="8xl" overflow="truncate">The five boxing wizards jump quickly.</Text>
        <Text size="9xl">9xl</Text>
        <Text size="9xl" overflow="truncate">The five boxing wizards jump quickly.</Text>
      </Grid>
    </Container>
  );
}
