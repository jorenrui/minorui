import React from 'react';
import { StitchesVariants } from '@stitches/react';

import { object } from '../lib/helpers/object';
import { StyledSkeleton } from './component';

export type ISkeletonVariants = StitchesVariants<typeof StyledSkeleton>;

type IProps = React.ComponentProps<typeof StyledSkeleton> & {
  rows?: number;
  height?: string;
  width?: string;
};

export function Skeleton({
  rows = 1,
  height,
  width,
  css,
  ...props
}: IProps) {
  return (
    <>
      {[...Array(rows)].map((_, index) => (
        <StyledSkeleton
          key={index}
          css={{
            width,
            height,
            ...object(css),
          }}
          {...props}
        />
      ))}
    </>
  );
}
