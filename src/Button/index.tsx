import React from 'react';
import { StitchesVariants } from '@stitches/core';

import { Spinner } from '../Spinner';
import { StyledButton } from './component';

export type IButtonVariants = StitchesVariants<typeof StyledButton>;

type IProps = React.ComponentProps<typeof StyledButton> & {
  loading?: boolean;
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, IProps>(({
  loading,
  kind,
  children,
  ...props
}, ref) => (
  <StyledButton
    ref={ref}
    kind={kind}
    {...props}
  >
    {!loading
      ? children
      : (
      <>
        <Spinner
          color={kind === 'primary'
            ? 'secondary'
            : 'primary'}
          css={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            margin: 'auto',
          }}
        />
        <span style={{ visibility: 'hidden' }}>{children}</span>
      </>
    )}
  </StyledButton>
));
