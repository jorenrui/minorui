import * as RadixLabel from '@radix-ui/react-label';
import { StitchesVariants } from '@stitches/react';
import { styled } from '../lib/stitches';

export type ILabelVariants = StitchesVariants<typeof Label>;

export const Label = styled(RadixLabel.Root, {
  display: 'inline-block',
  fontType: 'base',
  marginBottom: '$10',
});
