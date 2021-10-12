import React from 'react';
import type * as Stitches from '@stitches/react';
import * as RadixDialog from '@radix-ui/react-dialog';
import type * as Polymorphic from '@radix-ui/react-polymorphic';
import * as AccessibleIcon from '@radix-ui/react-accessible-icon';
import { PointerDownOutsideEvent } from '@radix-ui/react-dismissable-layer/dist/index';

import { X } from '../lib/icons/X';
import { styled } from '../lib/stitches';
import { CSSProp } from '../lib/types';

const DEFAULT_ROOT_TAG = 'div';

type DialogContentCSSProp = CSSProp<typeof StyledContent>;
type DialogContentVariants = Stitches.VariantProps<typeof StyledContent>;
type DialogRootOwnProps = DialogContentCSSProp
  & DialogContentVariants
  & React.ComponentProps<typeof StyledContent>
  & {
  id?: string;
  open: boolean;
  onClose: (event: PointerDownOutsideEvent) => void;
  onPointerDownOutside?: ((event: PointerDownOutsideEvent) => void) | undefined;
  children: React.ReactNode;
}

const StyledRoot = styled(RadixDialog.Root, {});

const StyledOverlay = styled(RadixDialog.Overlay, {
  backgroundColor: 'rgba(0, 0, 0, .15)',
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
});

const StyledContent = styled(RadixDialog.Content, {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: 'white',
  borderRadius: '$md',
  overflow: 'auto',
  maxHeight: '85vh',
  minWidth: '320px',

  '&:focus': {
    outline: 'none',
  },

  '@downSm': {
    width: '90vw',
  },

  variants: {
    size: {
      auto: {
        maxWidth: 'max-content',
      },
      sm: {
        maxWidth: '420px',
        width: '80vw',
      },
      md: {
        maxWidth: '520px',
        width: '80vw',
      },
      lg: {
        maxWidth: '720px',
        width: '80vw',
      },
    },
  },
  defaultVariants: {
    size: 'auto',
  },
});

const StyledClose = styled(RadixDialog.Close, {
  fontType: '$base',
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

const StyledIconContainer = styled('div', {
  position: 'absolute',
  top: '$20',
  right: '$20',
  width: 'auto',
});

type DialogRootComponent = Polymorphic.ForwardRefComponent<typeof DEFAULT_ROOT_TAG, DialogRootOwnProps>;

export const DialogRoot = React.forwardRef((props, forwardedRef) => {
  const {
    id,
    open,
    onClose,
    children,
    onPointerDownOutside,
    ...restProps
  } = props;
  const handleCloseClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    onClose(event as unknown as PointerDownOutsideEvent);
  }

  return (
    <StyledRoot open={open}>
      <StyledOverlay />
      <StyledContent
        ref={forwardedRef}
        onInteractOutside={onPointerDownOutside ?? onClose}
        {...restProps}
      >
        <StyledIconContainer>
          <StyledClose onClick={handleCloseClick}>
            <AccessibleIcon.Root label="Close">
              <X height="20px" width="20px" />
            </AccessibleIcon.Root>
          </StyledClose>
        </StyledIconContainer>
          {children}
      </StyledContent>
    </StyledRoot>
  );
}) as DialogRootComponent;
