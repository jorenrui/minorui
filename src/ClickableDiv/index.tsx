import React from 'react';
import { StitchesVariants } from '@stitches/react';

import { ENTER_CODE, SPACE_CODE } from '../lib/constants/keycodes';
import { StyledClickableDiv } from './component';

export type IClickableDivVariants = StitchesVariants<typeof StyledClickableDiv>;

type IProps = React.ComponentProps<typeof StyledClickableDiv> & {
  children: React.ReactNode;
  onClick: (event: React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>) => void;
}

export const ClickableDiv = React.forwardRef<HTMLDivElement, IProps>(({
  children,
  onClick,
  ...props
}, forwardedRef) => {
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
      {...props}
    >
      {children}
    </StyledClickableDiv>
  );
});
