import * as React from 'react';
import { Box, Heading, Note } from '../../../dist';

export function Feedback() {
  return (
    <Box>
      <Heading as="h2" size="5xl">
        Feedback
      </Heading>
      <Heading as="h3" size="4xl">
        Note
      </Heading>
      <Note type="primary">
        A primary note.
      </Note>
      <Note type="secondary">
        A secondary note.
      </Note>
      <Note type="tertiary">
        A tertiary note.
      </Note>
      <Note type="info">
        An info note.
      </Note>
      <Note type="error">
        An error note.
      </Note>
      <Note type="success">
        A success note.
      </Note>
      <Note type="warning">
        A warning note.
      </Note>
      <Note type="primary" label="Custom Label">
        A note with custom label.
      </Note>
      <Note type="primary" label={false}>
        A note with no label.
      </Note>
    </Box>
  );
}
