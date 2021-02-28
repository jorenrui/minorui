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
  backgroundColor: 'white',
  borderRadius: '$md',
  overflow: 'auto',
  maxHeight: '85vh',
  minWidth: '300px',

  '&:focus': {
    outline: 'none',
  },

  variants: {
    size: {
      auto: {
        maxWidth: 'max-content',
      },
      sm: {
        maxWidth: '400px',
        width: '80vw',
      },
      md: {
        maxWidth: '500px',
        width: '80vw',
      },
      lg: {
        maxWidth: '700px',
        width: '80vw',
      },
    },
  },
  defaultVariants: {
    size: 'auto',
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
  padding: '$200',
});

export const StyledFooter = styled('footer', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',

  '& > button': {
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
  fontType: 'xs',

  '&:hover, &focus': {
    backgroundColor: '$primary100',
  },
});
