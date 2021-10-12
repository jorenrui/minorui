import React from 'react';
import type * as Stitches from '@stitches/react';
import type * as Polymorphic from '@radix-ui/react-polymorphic';

import { capitalize } from '../lib/helpers/capitalize';
import { styled } from '../lib/stitches';
import { CSSProp } from '../lib/types';

const DEFAULT_TAG = 'div';

type NoteCSSProp = CSSProp<typeof StyledNote>;
type NoteVariants = Stitches.VariantProps<typeof StyledNote>;
type NoteOwnProps = NoteCSSProp & NoteVariants & {
  label?: string | boolean;
  children: React.ReactNode;
}

const StyledNote = styled(DEFAULT_TAG, {
  display: 'inline-block',
  height: '100%',
  width: '100%',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderRadius: '$sm',
  margin: '$30 0',

  variants: {
    type: {
      primary: {
        borderColor: '$primary',
        color: '$primary',
      },
      secondary: {
        borderColor: '$primary600',
        color: '$primary600',
      },
      tertiary: {
        borderColor: '$primary400',
        color: '$primary400',
      },
      accent: {
        borderColor: '$accent',
        color: '$accent',
      },
      info: {
        borderColor: '$info',
        color: '$info',
      },
      warning: {
        borderColor: '$warning',
        color: '$warning',
      },
      success: {
        borderColor: '$positive',
        color: '$positive',
      },
      error: {
        borderColor: '$negative',
        color: '$negative',
      },
      ghost: {
        border: 'none',
        color: '$primary',
      },
    },
    size: {
      small: {
        padding: '$50',
        fontType: '$sm',
      },
      medium: {
        padding: '$100',
        fontType: '$base',
      },
      large: {
        padding: '$150',
        fontType: '$lg',
      },
    },
  },
  defaultVariants: {
    type: 'primary',
    size: 'medium',
  },
});

type NoteComponent = Polymorphic.ForwardRefComponent<typeof DEFAULT_TAG, NoteOwnProps>;

const NOTE_LABELS = ['primary', 'secondary', 'tertiary', 'accent', 'ghost'];

export const Note = React.forwardRef((props, forwardedRef) => {
  const {
    label,
    children,
    type,
    ...restProps
  } = props;

  const noteType = type?.toString();

  const noteLabel = typeof label === 'undefined' && noteType
    ? capitalize(NOTE_LABELS.includes(noteType) ? 'note' : noteType)
    : label;

  return (
    <StyledNote ref={forwardedRef} type={type} {...restProps}>
      {noteLabel && <b>{noteLabel}: </b>}
      {children}
    </StyledNote>
  );
}) as NoteComponent;
