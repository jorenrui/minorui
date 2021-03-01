import * as RadixDropdownMenu from '@radix-ui/react-dropdown-menu';
import { styled } from '../lib/stitches';

const StyledRoot= styled(RadixDropdownMenu.Root, {});
const StyledTrigger = styled(RadixDropdownMenu.Trigger, {
  fontType: 'base',
  border: 'none',
  backgroundColor: 'transparent',
  borderRadius: '$sm',
});

const StyledContent = styled(RadixDropdownMenu.Content, {
  backgroundColor: '$white',
  borderRadius: '$sm',
  padding: '$30',
  minWidth: '$800',
  boxShadow: '$lg',
});

const StyledItem = styled(RadixDropdownMenu.Item, {
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

const StyledArrow = styled(RadixDropdownMenu.Arrow, {
  fill: '$white',
});

export const DropdownMenu = {
  Root: StyledRoot,
  Arrow: StyledArrow,
  Content: StyledContent,
  Item: StyledItem,
  Trigger: StyledTrigger,
};
