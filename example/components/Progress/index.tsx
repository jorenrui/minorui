import * as React from 'react';

import { Card, Skeleton, styled } from '../../../dist';

const Grid = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  gap: '$100',
});

export function Progress() {
  return (
    <Grid>
      <Card>
        <Skeleton type="avatar" />
        <Skeleton type="heading" width="50%" />
        <Skeleton type="caption" width="30%" />
        <Skeleton rows={3} width="90%" />
      </Card>
      <Card>
        <Skeleton type="avatar" />
        <Skeleton type="heading" width="50%" />
        <Skeleton type="caption" width="30%" />
        <Skeleton rows={3} width="90%" />
      </Card>
      <Card>
        <Skeleton type="avatar" />
        <Skeleton type="heading" width="50%" />
        <Skeleton type="caption" width="30%" />
        <Skeleton rows={3} width="90%" />
      </Card>
    </Grid>
  );
}
