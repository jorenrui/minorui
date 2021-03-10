import * as React from 'react';
import { Box, Heading, Headline } from '../../../dist';

export function DataDisplay() {
  return (
    <Box>
      <Heading as="h2" size="5xl">
        Data Display
      </Heading>
      <Heading as="h3" size="4xl">
        Headline
      </Heading>
      <Headline.Root>
        <Headline.SubTitle>LEARNING PATH</Headline.SubTitle>
        <Headline.Content>
          <Headline.ContentInfo>
            <Headline.Title>
              Learn ReactJS
            </Headline.Title>
            <Headline.SubTitle>
              by @jorenrui | March 10, 2021
            </Headline.SubTitle>
            <Headline.Description>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam quidem commodi animi magnam nam similique repellat consequatur inventore deleniti. Consectetur ut similique nulla! Odit dignissimos, dolorem quibusdam neque deserunt ea.
            </Headline.Description>
          </Headline.ContentInfo>
        </Headline.Content>
      </Headline.Root>
    </Box>
  );
}
