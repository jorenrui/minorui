import React from 'react';
import type * as Stitches from '@stitches/react';
import type * as Polymorphic from '@radix-ui/react-polymorphic';

import { styled } from '../lib/stitches';
import { ENTER_CODE, SPACE_CODE } from '../lib/constants/keycodes';
import { CSSProp } from '../lib/types';

const DEFAULT_TAG = 'div';

type ClickableDivCSSProp = CSSProp<typeof StyledClickableDiv>;
type ClickableDivVariants = Stitches.VariantProps<typeof StyledClickableDiv>;
type ClickableDivOwnProps = ClickableDivCSSProp & ClickableDivVariants & {
  children: React.ReactNode;
  onClick: (event: React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>) => void;
}

const StyledClickableDiv = styled(DEFAULT_TAG, {
  outlineColor: '$primary900',

  variants: {
    type: {
      card: {
        outline: 'none',
        padding: '$50',

        '&:focus, &:hover': {
          backgroundColor: '$primary100',
        },
      },
    },
  },
});

type ClickableDivComponent = Polymorphic.ForwardRefComponent<typeof DEFAULT_TAG, ClickableDivOwnProps>;

export const ClickableDiv = React.forwardRef((props, forwardedRef) => {
  const { children, onClick, ...restProps } = props;

  const handleKeyDown = (evt: React.KeyboardEvent<HTMLDivElement>) => {
    if (evt.code === ENTER_CODE || evt.code === SPACE_CODE) {
      evt.preventDefault();
      onClick(evt);
    }
  };

  return (
    <StyledClickableDiv
      ref={forwardedRef}
      role="button"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onClick={onClick}
      {...restProps}
    >
      {children}
    </StyledClickableDiv>
  );
}) as ClickableDivComponent;
