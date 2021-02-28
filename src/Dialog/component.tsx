import * as RadixDialog from '@radix-ui/react-dialog';
import { styled } from '../lib/stitches';

export const StyledRoot = styled(RadixDialog.Root, {});

export const StyledOverlay = styled(RadixDialog.Overlay, {
  backgroundColor: 'rgba(0, 0, 0, .15)',
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
});

export const StyledContent = styled(RadixDialog.Content, {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  minWidth: '$2000',
  maxWidth: 'max-content',
  maxHeight: '85vh',
  backgroundColor: 'white',
  borderRadius: '$md',
  overflow: 'auto',

  '&:focus': {
    outline: 'none',
  },
});

export const StyledClose = styled(RadixDialog.Close, {
  fontType: 'base',
  border: 'none',
  backgroundColor: 'transparent',
  borderRadius: '$full',
  display: 'flex',
  placeContent: 'center',
  padding: '$50',

  '&:hover, &:focus': {
    backgroundColor: '$primary100',
  }
});

export const StyledIconContainer = styled('div', {
  position: 'absolute',
  top: '$20',
  right: '$20',
  width: 'auto',
});

export const StyledContentContainer = styled('div', {
  boxSizing: 'border-box',
  padding: '$100',
});

export const StyledFooter = styled('footer', {
  display: 'flex',

  '& > button': {
    flexGrow: 1,
    borderTop: '1px solid $colors$primary200',
  },
  '& > button:nth-child(2)': {
    borderLeft: '1px solid $colors$primary200',
  },
});

export const StyledButton = styled('button', {
  background: 'transparent',
  border: 'none',
  padding: '$100 $300',
  fontType: 'sm',

  '&:hover, &focus': {
    backgroundColor: '$primary100',
  },
});
