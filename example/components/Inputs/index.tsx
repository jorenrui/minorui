import * as React from 'react';

import { Button, Heading, styled } from '../../../dist';
const Block = styled('span', {
  padding: '$150',
})

export function Inputs() {
  return (
    <div>
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
    </div>
  );
}
