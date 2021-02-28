import { styled } from '../lib/stitches';
import * as RadixDropdownMenu from '@radix-ui/react-dropdown-menu';

export const StyledRoot= styled(RadixDropdownMenu.Root, {});
export const StyledTrigger = styled(RadixDropdownMenu.Trigger, {
  fontType: 'base',
  border: 'none',
  backgroundColor: 'transparent',
  borderRadius: '$sm',
});

export const StyledContent = styled(RadixDropdownMenu.Content, {
  backgroundColor: '$white',
  borderRadius: '$sm',
  padding: '$30',
  minWidth: '$800',
  boxShadow: '$lg',
});

export const StyledItem = styled(RadixDropdownMenu.Item, {
  padding: '$30 $50',
  fontType: 'sm',
  borderRadius: '$xs',
  cursor: 'default',
  color: '$primary',

  '&:hover, &:focus': {
    outline: 'none',
    backgroundColor: '$primary',
    color: '$white',
  },

  variants: {
    active: {
      true: {
        outline: 'none',
        backgroundColor: '$primary',
        color: '$white',
      },
    },
  },
});

export const StyledArrow = styled(RadixDropdownMenu.Arrow, {
  fill: '$white',
});
