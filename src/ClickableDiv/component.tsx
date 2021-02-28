import { styled } from '../lib/stitches';

export const StyledClickableDiv = styled('div', {
  outlineColor: '$primary900',

  variants: {
    type: {
      card: {
        outline: 'none',
        padding: '$50',

        '&:focus': {
          backgroundColor: '$primary100',
        },
        '&:hover': {
          backgroundColor: '$primary100',
        },
      },
    },
  },
});
