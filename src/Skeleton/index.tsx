import React from 'react';
import { object } from '../lib/helpers/object';
import { keyframes, styled } from '../lib/stitches';

const shimmer = keyframes({
  '0%': {
    transform: 'translateX(0)',
  },
  '100%': {
    transform: 'translateX(100%)',
  },
});

const StyledSkeleton = styled('span', {
  width: '100%',
  position: 'relative',
  overflow: 'hidden',
  backgroundColor: '$gray300',

  variants: {
    display: {
      inline: {
        display: 'inline-block',
      },
      block: {
        display: 'block',
        margin: '$30',
      },
    },
    type: {
      heading: {
        height: '$150',
      },
      text: {
        height: '$100',
      },
      caption: {
        height: '$50',
      },
      avatar: {
        height: '$300',
        width: '$300',
        borderRadius: '$full',
      },
    },
  },
  defaultVariants: {
    type: 'text',
    display: 'block',
  },

  '&::after': {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    transform: 'translateX(-100%)',
    backgroundImage: `linear-gradient(
      90deg,
      rgba(255, 255, 255, 0) 0,
      rgba(255, 255, 255, 0.2) 20%,
      rgba(255, 255, 255, 0.5) 60%,
      rgba(255, 255, 255, 0)
    )`,
    animation: `${shimmer} 2s infinite`,
    content: '""',
  },
});

type IProps = React.ComponentProps<typeof StyledSkeleton> & {
  rows?: number;
  height?: string;
  width?: string;
};

export function Skeleton({
  rows = 1,
  height,
  width,
  css,
  ...props
}: IProps) {
  return (
    <>
      {[...Array(rows)].map((_, index) => (
        <StyledSkeleton
          key={index}
          css={{
            width,
            height,
            ...object(css),
          }}
          {...props}
        />
      ))}
    </>
  );
}
