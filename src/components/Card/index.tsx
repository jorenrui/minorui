import { CSS, css, styled } from '../../stitches';

const CARD_STYLES: CSS = {
  boxSizing: 'border-box',
  border: '1px solid $gray200',
  color: '$gray900',
  borderRadius: '$md',
  padding: '$5',

  '&:hover': {
    boxShadow: '$lg',
  },
  '&:focus': {
    boxShadow: '$lg',
  },
}

export const card = css(CARD_STYLES);
export const Card = styled('div', CARD_STYLES);
