import React from 'react';
import type * as Stitches from '@stitches/react';
import type * as Polymorphic from '@radix-ui/react-polymorphic';
import * as VisuallyHidden from '@radix-ui/react-visually-hidden';

import { CSSProp } from '../lib/types';
import { styled } from '../lib/stitches';
import { Spinner } from '../Spinner';

const DEFAULT_TAG = 'button';

type ButtonCSSProp = CSSProp<typeof StyledButton>;
type ButtonVariants = Stitches.VariantProps<typeof StyledButton>;
type ButtonOwnProps = ButtonCSSProp & ButtonVariants & {
  loading?: boolean;
  loadingText?: string;
  children: React.ReactNode;
}

const StyledButton = styled(DEFAULT_TAG, {
  position: 'relative',
  height: 'auto',
  border: 'none',
  WebkitAppearance: 'none',
  backgroundColor: 'transparent',
  transition: `
    background-color 200ms ease 0ms,
    box-shadow 200ms ease 0ms,
    color 200ms ease 0ms
  `,
  $$shadowColor: '$colors$primary',

  '&:hover': {
    opacity: 0.95,
  },
  '&:disabled': {
    opacity: 0.8,
    $$shadowColor: '#ccc',
  },

  variants: {
    size: {
      xs: {
        fontType: '$xs',
        padding: '$30 $40',
      },
      sm: {
        fontType: '$sm',
        padding: '$50 $60',
      },
      md: {
        fontType: '$base',
        padding: '$80 $100',
      },
      lg: {
        fontType: '$xl',
        padding: '$100 $200',
      },
    },
    width: {
      default: {
        width: '$max',
      },
      wide: {
        width: '100%',
        paddingLeft: 'auto',
        paddingRight: 'auto',
      },
    },
    shape: {
      sharp: {
        borderRadius: 0,
      },
      pill: {
        borderRadius: '$full',
      },
      round: {
        borderRadius: '$md',
      },
      square: {
        padding: '$10',
      },
      circle: {
        borderRadius: '$full',
        width: '$275',
        height: '$275',
        padding: '$10',
      },
    },
    color: {
      primary: {
        backgroundColor: '$primary',
        color: '$primaryText',
      },
      accent: {
        backgroundColor: '$accent',
        color: '$accentText',
      },
      info: {
        backgroundColor: '$info',
        color: '$infoText',
      },
      warning: {
        backgroundColor: '$warning',
        color: '$warningText',
      },
      positive: {
        backgroundColor: '$positive',
        color: '$positiveText',
      },
      negative: {
        backgroundColor: '$negative',
        color: '$negativeText',
      },
    },
    kind: {
      primary: {
        outlineColor: '$primary',
        backgroundColor: '$primary',
        color: 'white',
      },
      secondary: {
        backgroundColor: 'transparent',
        boxShadow: '0 0 0 1px $$shadowColor',

        '&:hover, &:focus': {
          backgroundColor: '$$shadowColor',
          color: '$white',
        },
      },
      tertiary: {
        backgroundColor: '$primary100',

        '&:hover, &:focus': {
          backgroundColor: '$primary200',
        },
      },
      ghost: {
        backgroundColor: 'transparent',

        '&:hover, &:focus': {
          backgroundColor: '$primary200',
        },
      },
    },
  },
  compoundVariants: [{
    shape: 'square',
    size: 'lg',
    css: {
      width: '$350',
      height: '$350',
    }
  }, {
    shape: 'square',
    size: 'md',
    css: {
      width: '$250',
      height: '$250',
    }
  }, {
    shape: 'square',
    size: 'sm',
    css: {
      width: '$200',
      height: '$200',
    }
  }, {
    shape: 'square',
    size: 'xs',
    css: {
      width: '$150',
      height: '$150',
    }
  }, {
    shape: 'circle',
    size: 'lg',
    css: {
      width: '$350',
      height: '$350',
    }
  }, {
    shape: 'circle',
    size: 'md',
    css: {
      width: '$250',
      height: '$250',
    }
  }, {
    shape: 'circle',
    size: 'sm',
    css: {
      width: '$200',
      height: '$200',
    }
  }, {
    shape: 'circle',
    size: 'xs',
    css: {
      width: '$150',
      height: '$150',
    }
  }, {
    kind: 'secondary',
    color: 'primary',
    css: {
      background: 'transparent',
      $$shadowColor: '$colors$primary',
      color: '$primary',
    },
  }, {
    kind: 'secondary',
    color: 'accent',
    css: {
      background: 'transparent',
      $$shadowColor: '$colors$accent',
      color: '$accent',
    },
  }, {
    kind: 'secondary',
    color: 'info',
    css: {
      background: 'transparent',
      $$shadowColor: '$colors$info',
      color: '$info',
    },
  }, {
    kind: 'secondary',
    color: 'warning',
    css: {
      background: 'transparent',
      $$shadowColor: '$colors$warning',
      color: '$warning',
    },
  }, {
    kind: 'secondary',
    color: 'positive',
    css: {
      background: 'transparent',
      $$shadowColor: '$colors$positive',
      color: '$positive',
    },
  }, {
    kind: 'secondary',
    color: 'negative',
    css: {
      background: 'transparent',
      $$shadowColor: '$colors$negative',
      color: '$negative',
    },
  }, {
    kind: 'tertiary',
    color: 'primary',
    css: {
      color: '$text',
      backgroundColor: '$primary100',

      '&:hover, &:focus': {
        backgroundColor: '$primary200',
      },
    },
  }, {
    kind: 'tertiary',
    color: 'accent',
    css: {
      color: '$text',
      backgroundColor: '$accent100',

      '&:hover, &:focus': {
        backgroundColor: '$accent200',
      },
    },
  }, {
    kind: 'tertiary',
    color: 'info',
    css: {
      color: '$text',
      backgroundColor: '$blue100',

      '&:hover, &:focus': {
        backgroundColor: '$blue200',
      },
    },
  }, {
    kind: 'tertiary',
    color: 'warning',
    css: {
      color: '$text',
      backgroundColor: '$yellow100',

      '&:hover, &:focus': {
        backgroundColor: '$yellow200',
      },
    },
  }, {
    kind: 'tertiary',
    color: 'positive',
    css: {
      color: '$text',
      backgroundColor: '$green100',

      '&:hover, &:focus': {
        backgroundColor: '$green200',
      },
    },
  }, {
    kind: 'tertiary',
    color: 'negative',
    css: {
      color: '$text',
      backgroundColor: '$red100',

      '&:hover, &:focus': {
        backgroundColor: '$red200',
      },
    },
  }, {
    kind: 'ghost',
    color: 'primary',
    css: {
      color: '$primary',
      backgroundColor: 'transparent',

      '&:hover, &:focus': {
        backgroundColor: '$primary200',
      },
    },
  }, {
    kind: 'ghost',
    color: 'accent',
    css: {
      color: '$accent',
      backgroundColor: 'transparent',

      '&:hover, &:focus': {
        backgroundColor: '$accent200',
      },
    },
  }, {
    kind: 'ghost',
    color: 'info',
    css: {
      color: '$info',
      backgroundColor: 'transparent',

      '&:hover, &:focus': {
        backgroundColor: '$blue200',
      },
    },
  }, {
    kind: 'ghost',
    color: 'warning',
    css: {
      color: '$warning',
      backgroundColor: 'transparent',

      '&:hover, &:focus': {
        backgroundColor: '$yellow200',
      },
    },
  }, {
    kind: 'ghost',
    color: 'positive',
    css: {
      color: '$positive',
      backgroundColor: 'transparent',

      '&:hover, &:focus': {
        backgroundColor: '$green200',
      },
    },
  }, {
    kind: 'ghost',
    color: 'negative',
    css: {
      color: '$negative',
      backgroundColor: 'transparent',

      '&:hover, &:focus': {
        backgroundColor: '$red200',
      },
    },
  }],
  defaultVariants: {
    size: 'md',
    kind: 'primary',
    shape: 'round',
    width: 'default',
  },
});

type ButtonComponent = Polymorphic.ForwardRefComponent<typeof DEFAULT_TAG, ButtonOwnProps>;

export const Button = React.forwardRef((props, forwardedRef) => {
  const {
    loading,
    loadingText,
    kind,
    children,
    ...restProps
  } = props;

  return (
    <StyledButton ref={forwardedRef} kind={kind} {...restProps}>
      {!loading
        ? children
        : (
        <>
          <Spinner
            color={kind === 'primary'
              ? 'secondary'
              : 'primary'}
            size="mini"
            css={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              margin: 'auto',
            }}
          />
          <VisuallyHidden.Root>
            {loadingText ?? 'Loading, please wait.'}
          </VisuallyHidden.Root>
          <span style={{ visibility: 'hidden' }}>{children}</span>
        </>
      )}
    </StyledButton>
  );
}) as ButtonComponent;
