import { styled } from '../lib/stitches';
import { DialogRoot } from './dialog-root';
import { DialogTitle } from './dialog-title';

const StyledContent = styled('div', {
  boxSizing: 'border-box',
  padding: '$200',
});

const StyledFooter = styled('footer', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',

  '& > button': {
    borderTop: '1px solid $colors$primary200',
  },
  '& > button:nth-child(2)': {
    borderLeft: '1px solid $colors$primary200',
  },
});

const StyledButton = styled('button', {
  background: 'transparent',
  border: 'none',
  padding: '$100 $300',
  fontType: '$xs',

  '&:hover, &focus': {
    backgroundColor: '$primary100',
  },
});

export const Dialog = {
  Root: DialogRoot,
  Content: StyledContent,
  Title: DialogTitle,
  Footer: StyledFooter,
  Button: StyledButton,
};
