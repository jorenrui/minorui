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
  minWidth: '$1000',
  maxWidth: 'max-content',
  maxHeight: '85vh',
  backgroundColor: 'white',
  borderRadius: '$sm',
  overflow: 'auto',
  padding: '$100',

  '&:focus': {
    outline: 'none',
  },
});

export const StyledTrigger = styled(RadixDialog.Trigger, {
  fontType: 'base',
  border: 'none',
  backgroundColor: 'transparent',
  borderRadius: '$sm',
});

export const StyledClose = styled(RadixDialog.Close, {
  fontType: 'base',
  border: 'none',
  backgroundColor: 'transparent',
  borderRadius: '$sm',
});
