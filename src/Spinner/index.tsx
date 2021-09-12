import React from 'react';
import type * as Stitches from '@stitches/react';
import type * as Polymorphic from '@radix-ui/react-polymorphic';
import * as VisuallyHidden from '@radix-ui/react-visually-hidden';

import { keyframes, styled } from '../lib/stitches';
import { CSSProp } from '../lib/types';

const DEFAULT_TAG = 'span';

type SpinnerCSSProp = CSSProp<typeof StyledSpinner>;
type SpinnerVariants = Stitches.VariantProps<typeof StyledSpinner>;
type SpinnerOwnProps = SpinnerCSSProp & SpinnerVariants;

const rotate = keyframes({
  '0%': {
    transform: 'rotate(0deg)',
  },
  '100%': {
    transform: 'rotate(360deg)',
  },
});

const StyledSpinner = styled('span', {
  display: 'inline-block',
  position: 'relative',
  top: '$10',
  borderRadius: '$full',
  transform: 'translateZ(0)',
  MsTransform: 'translateZ(0)',
  WebkitTransform: 'translateZ(0)',
  WebkitAnimation: `${rotate} 1.1s infinite linear`,
  animation: `${rotate} 1.1s infinite linear`,
  borderStyle: 'solid',

  '&:after': {
    borderRadius: '$full',
  },

  variants: {
    color: {
      primary: {
        borderLeftColor: '$white',
        borderTopColor: '$primary',
        borderRightColor: '$primary',
        borderBottomColor: '$primary',
      },
      secondary: {
        borderLeftColor: '$primary',
        borderTopColor: '$white',
        borderRightColor: '$white',
        borderBottomColor: '$white',
      },
    },
    size: {
      large: {
        width: '$350',
        height: '$350',
        borderWidth: '10px',

        '&::after': {
          width: '$350',
          height: '$350',
        }
      },
      medium: {
        width: '$250',
        height: '$250',
        borderWidth: '8px',

        '&::after': {
          width: '$250',
          height: '$250',
        }
      },
      small: {
        width: '$200',
        height: '$200',
        borderWidth: '5px',

        '&::after': {
          width: '$200',
          height: '$200',
        }
      },
      mini: {
        width: '$100',
        height: '$100',
        borderWidth: '3px',

        '&::after': {
          width: '$100',
          height: '$100',
        }
      },
    },
  },
  defaultVariants: {
    color: 'primary',
    size: 'medium',
  },
});

type SpinnerComponent = Polymorphic.ForwardRefComponent<typeof DEFAULT_TAG, SpinnerOwnProps>;

export const Spinner = React.forwardRef((props, forwardedRef) => {
  return (
    <StyledSpinner ref={forwardedRef} {...props}>
      <VisuallyHidden.Root>
        {props['aria-label'] ?? 'Loading, please wait.'}
      </VisuallyHidden.Root>
    </StyledSpinner>
  );
}) as SpinnerComponent;
