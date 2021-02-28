import React from 'react';
import { useState } from 'react';
import * as AccessibleIcon from '@radix-ui/react-accessible-icon';
import { X } from '../lib/icons/X';
import { object } from '../lib/helpers/object';
import {
  StyledRoot,
  StyledContent,
  StyledClose,
  StyledOverlay,
  StyledContentContainer,
  StyledIconContainer,
  StyledFooter,
  StyledButton,
} from './component';
import { Heading } from '../Heading';

type IProps = React.ComponentProps<typeof StyledContent> & {
  id?: string;
  open: boolean;
  onClose: (event: MouseEvent | TouchEvent) => void;
  children: React.ReactNode;
}

const DialogRoot = React.forwardRef<HTMLDivElement, IProps>((
  {
    id,
    open,
    onClose,
    children,
    onPointerDownOutside,
    ...props
  },
  forwardedRef,
) => {
  const [dialogId] = useState(() => (id ? `dialog-${id.replace(/\s+/g, '-')}` : undefined));

  const handleCloseClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    onClose(event as unknown as MouseEvent);
  }

  return (
    <StyledRoot id={dialogId} open={open}>
      <StyledOverlay />
      <StyledContent
        ref={forwardedRef}
        onPointerDownOutside={onPointerDownOutside ?? onClose}
        {...props}
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
});

type ITitleProps = React.ComponentProps<typeof Heading>;

const DialogTitle = React.forwardRef<HTMLHeadingElement, ITitleProps>((
  {
    size = '4xl',
    children,
    css,
    ...props
  },
  forwardedRef,
) => {
  return (
    <Heading
      ref={forwardedRef}
      as="h2"
      size={size}
      css={{ textAlign: 'center', ...object(css) }}
      {...props}
    >
      {children}
    </Heading>
  )
});

export const Dialog = {
  Root: DialogRoot,
  Content: StyledContentContainer,
  Title: DialogTitle,
  Footer: StyledFooter,
  Button: StyledButton,
};
