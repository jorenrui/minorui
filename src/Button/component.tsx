import { StitchesVariants } from '@stitches/core';
import { styled } from '../lib/stitches';

export const StyledButton = styled('button', {
  position: 'relative',
  height: 'auto',
  border: 'none',
  transition: `
    background-color 200ms ease 0ms,
    box-shadow 200ms ease 0ms,
    border 200ms ease 0ms,
    color 200ms ease 0ms
  `,

  '&:hover': {
    opacity: 0.95,
  },
  '&:disabled': {
    opacity: 0.8,
  },

  variants: {
    size: {
      mini: {
        fontSize: '$xs',
        padding: '$20 $30',
      },
      small: {
        fontSize: '$sm',
        padding: '$40 $50',
      },
      medium: {
        fontSize: '$base',
        padding: '$60 $80',
      },
      large: {
        fontSize: '$xl',
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
    kind: {
      primary: {
        outlineColor: '$primary',
        backgroundColor: '$primary',
        color: 'white',
      },
      secondary: {
        backgroundColor: 'transparent',
        border: '1px solid $primary',

        '&:hover, &:focus': {
          backgroundColor: '$primary',
          color: '$white',
        },
      },
      tertiary: {
        backgroundColor: '$gray100',

        '&:hover, &:focus': {
          backgroundColor: '$gray200',
        },
      },
      ghost: {
        backgroundColor: 'transparent',

        '&:hover, &:focus': {
          backgroundColor: '$gray100',
        },
      },
    },
  },
  compoundVariants: [{
    shape: 'square',
    size: 'large',
    css: {
      width: '$350',
      height: '$350',
    }
  }, {
    shape: 'square',
    size: 'medium',
    css: {
      width: '$250',
      height: '$250',
    }
  }, {
    shape: 'square',
    size: 'small',
    css: {
      width: '$200',
      height: '$200',
    }
  }, {
    shape: 'square',
    size: 'mini',
    css: {
      width: '$150',
      height: '$150',
    }
  }, {
    shape: 'circle',
    size: 'large',
    css: {
      width: '$350',
      height: '$350',
    }
  }, {
    shape: 'circle',
    size: 'medium',
    css: {
      width: '$250',
      height: '$250',
    }
  }, {
    shape: 'circle',
    size: 'small',
    css: {
      width: '$200',
      height: '$200',
    }
  }, {
    shape: 'circle',
    size: 'mini',
    css: {
      width: '$150',
      height: '$150',
    }
  }],
  defaultVariants: {
    size: 'medium',
    kind: 'primary',
    shape: 'round',
    width: 'default',
  },
});

export type IButtonVariants = StitchesVariants<typeof StyledButton>;
