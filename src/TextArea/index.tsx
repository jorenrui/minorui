import { styled } from '../lib/stitches';

export const TextArea = styled('textarea', {
  display: 'block',
  width: '100%',
  border: 'none',
  borderRadius: '$sm',
  outlineColor: 'currentColor',
  resize: 'vertical',
  overflowY: 'auto',

  '&:hover, &:focus, &:active': {
    boxShadow: 'inset 0 0 0 1px $colors$primary',
  },

  variants: {
    variant: {
      info: {
        boxShadow: 'inset 0 0 0 1px $colors$blue600',
      },
      warning: {
        boxShadow: 'inset 0 0 0 1px $colors$yellow600',
      },
      error: {
        boxShadow: 'inset 0 0 0 1px $colors$red600',
      },
      success: {
        boxShadow: 'inset 0 0 0 1px $colors$green600',
      },
      accent: {
        boxShadow: 'inset 0 0 0 1px $colors$accent600',
      },
      default: {
        boxShadow: 'inset 0 0 0 1px $colors$primary300',
      },
    },
    size: {
      xs: {
        padding: '$30 $40',
        fontType: 'xs',
      },
      sm: {
        padding: '$40 $50',
        fontType: 'sm',
      },
      md: {
        padding: '$40 $50',
        fontType: 'base',
      },
      lg: {
        padding: '$50 $60',
        fontType: 'base',
      }
    }
  },
  defaultVariants: {
    variant: 'default',
    size: 'md',
  },
});
