import { StitchesVariants } from '@stitches/core';
import { styled } from '../lib/stitches';

export type IInputVariants = StitchesVariants<typeof Input>;

export const Input = styled('input', {
  display: 'block',
  width: '100%',
  padding: '$40 $50',
  border: 'none',
  boxShadow: 'inset 0 0 0 1px $colors$primary300',
  borderRadius: '$md',
  outlineColor: 'currentColor',
  color: '$text',
  fontType: 'base',

  '&:hover, &:focus, &:active': {
    boxShadow: 'inset 0 0 0 1px $colors$primary',
  }
});
