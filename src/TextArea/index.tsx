import { StitchesVariants } from '@stitches/core';
import { styled } from '../lib/stitches';

export type ITextAreaVariants = StitchesVariants<typeof TextArea>;

export const TextArea = styled('textarea', {
  display: 'block',
  width: '100%',
  border: 'none',
  boxShadow: 'inset 0 0 0 1px $colors$primary300',
  padding: '$40 $50',
  borderRadius: '$md',
  outlineColor: 'currentColor',
  color: '$text',
  fontType: 'base',
  resize: 'vertical',

  '&:hover, &:focus, &:active': {
    boxShadow: 'inset 0 0 0 1px $colors$primary',
  }
});
