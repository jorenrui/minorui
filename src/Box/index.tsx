import { css, styled } from '../lib/stitches';

export const box = css({});
export const Box = styled('div', {
  variants: {
    display: {
      block: {
        display: 'block',
      },
      'inline-block': {
        display: 'inline-block',
      },
      flex: {
        display: 'flex',
      },
      grid: {
        display: 'grid',
      },
    }
  },
});
