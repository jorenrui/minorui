import React from 'react';
import type * as Polymorphic from '@radix-ui/react-polymorphic';

import { Button } from '../Button';
import { CSSProp } from '../lib/types';

const DEFAULT_TAG = 'button';

type ButtonCSSProp = CSSProp<typeof Button>;
type ButtonVariants = React.ComponentProps<typeof Button>;
type ButtonOwnProps = ButtonCSSProp & ButtonVariants;

type HeadlineButtonComponent = Polymorphic.ForwardRefComponent<typeof DEFAULT_TAG, ButtonOwnProps>;

export const StyledHeadlineButton = React.forwardRef((props, forwardedRef) => {
  const {
    type = 'button',
    size = 'sm',
    color = 'primary',
    children,
    ...restProps
  } = props;

  return (
    <Button
      ref={forwardedRef}
      type={type}
      size={size}
      color={color}
      {...restProps}
    >
      {children}
    </Button>
  );
}) as HeadlineButtonComponent;
