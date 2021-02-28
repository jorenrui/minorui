import { StitchesVariants } from '@stitches/react';
import { styled } from '../lib/stitches';

export type IContainerVariants = StitchesVariants<typeof Container>;

export const Container = styled('div', {
  height: '100%',
  width: '100%',

  when: {
    downSm: {
      padding: '$150 5%',
    },
    md: {
      padding: '$150 10%',
    },
    upLg: {
      padding: '$150 20%',
    },
  },
});
