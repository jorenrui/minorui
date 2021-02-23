import * as React from 'react';

import { Box, Button, Heading, styled, Input } from '../../../dist';

const Block = styled('span', {
  padding: '$150',
})

export function Inputs() {
  return (
    <Box>
      <Heading as="h2" size="5xl">
        Inputs
      </Heading>
      <Heading as="h3" size="4xl">
        Buttons
      </Heading>
      <Heading as="h4" size="3xl">
        Sizes
      </Heading>
      <Block>
        <Block>
          <Button size="large">
            Large
          </Button>
        </Block>
        <Block>
          <Button size="medium">
            Medium
          </Button>
        </Block>
        <Block>
          <Button size="small">
            Small
          </Button>
        </Block>
        <Block>
          <Button size="mini">
            Mini
          </Button>
        </Block>
      </Block>
      <Heading as="h4" size="3xl">
        Shapes
      </Heading>
      <Block>
        <Block>
          <Button shape="round">
            Round
          </Button>
        </Block>
        <Block>
          <Button shape="pill">
            Pill Button
          </Button>
        </Block>
        <Block>
          <Button shape="sharp">
            Sharp
          </Button>
        </Block>
        <Block>
          <Button shape="square">
            SQ
          </Button>
        </Block>
        <Block>
          <Button shape="circle">
            CC
          </Button>
        </Block>
      </Block>
      <Heading as="h4" size="3xl">
        Kinds
      </Heading>
      <Block>
        <Block>
          <Button kind="primary">
            Primary
          </Button>
        </Block>
        <Block>
          <Button kind="secondary">
            Secondary
          </Button>
        </Block>
        <Block>
          <Button kind="tertiary">
            Tertiary
          </Button>
        </Block>
        <Block>
          <Button kind="ghost">
            Ghost
          </Button>
        </Block>
      </Block>
      <Heading as="h4" size="3xl">
        State
      </Heading>
      <Block>
        <Block>
          <Button>
            Default
          </Button>
        </Block>
        <Block>
          <Button loading>
            Loading
          </Button>
        </Block>
        <Block>
          <Button disabled>
            Disabled
          </Button>
        </Block>
      </Block>
      <Heading as="h4" size="3xl">
        Colors
      </Heading>
      <Block>
        <Block>
          <Button color="primary">
            Primary
          </Button>
        </Block>
        <Block>
          <Button color="accent">
            Accent
          </Button>
        </Block>
        <Block>
          <Button color="info">
            Info
          </Button>
        </Block>
        <Block>
          <Button color="positive">
            Positive
          </Button>
        </Block>
        <Block>
          <Button color="negative">
            Negative
          </Button>
        </Block>
      </Block>
      <Block css={{ display: 'block' }}>
        <Block>
          <Button color="primary" kind="secondary">
            Primary
          </Button>
        </Block>
        <Block>
          <Button color="accent"  kind="secondary">
            Accent
          </Button>
        </Block>
        <Block>
          <Button color="info"  kind="secondary">
            Info
          </Button>
        </Block>
        <Block>
          <Button color="positive"  kind="secondary">
            Positive
          </Button>
        </Block>
        <Block>
          <Button color="negative"  kind="secondary">
            Negative
          </Button>
        </Block>
      </Block>
      <Block css={{ display: 'block' }}>
        <Block>
          <Button color="primary" kind="tertiary">
            Primary
          </Button>
        </Block>
        <Block>
          <Button color="accent"  kind="tertiary">
            Accent
          </Button>
        </Block>
        <Block>
          <Button color="info"  kind="tertiary">
            Info
          </Button>
        </Block>
        <Block>
          <Button color="positive"  kind="tertiary">
            Positive
          </Button>
        </Block>
        <Block>
          <Button color="negative"  kind="tertiary">
            Negative
          </Button>
        </Block>
      </Block>
      <Block css={{ display: 'block' }}>
        <Block>
          <Button color="primary" kind="ghost">
            Primary
          </Button>
        </Block>
        <Block>
          <Button color="accent"  kind="ghost">
            Accent
          </Button>
        </Block>
        <Block>
          <Button color="info"  kind="ghost">
            Info
          </Button>
        </Block>
        <Block>
          <Button color="positive"  kind="ghost">
            Positive
          </Button>
        </Block>
        <Block>
          <Button color="negative"  kind="ghost">
            Negative
          </Button>
        </Block>
      </Block>
      <Heading as="h3" size="4xl">
        Input Field
      </Heading>
      <Block>
        <Input type="text" />
      </Block>
    </Box>
  );
}
