import React from 'react';
import { StitchesVariants } from '@stitches/react';
import type * as Polymorphic from '@radix-ui/react-polymorphic';

import { Heading } from '../Heading';
import { CSSProp } from '../lib/types';
import { object } from '../lib/helpers/object';

const DEFAULT_TAG = 'h1';

type HeadingCSSProp = CSSProp<typeof Heading>;
type HeadingVariants = StitchesVariants<typeof Heading>;
type HeadingOwnProps = HeadingCSSProp & HeadingVariants;

type HeadlineTitleComponent = Polymorphic.ForwardRefComponent<typeof DEFAULT_TAG, HeadingOwnProps>;

export const StyledHeadlineTitle = React.forwardRef((props, forwardedRef) => {
  const {
    size = '5xl',
    children,
    css,
    as,
    ...restProps
  } = props;

  return (
    <Heading
      ref={forwardedRef}
      as={'h1' || as}
      size={size}
      css={{ fontWeight: 600, marginBottom: 0, ...object(css) }}
      {...restProps}
    >
      {children}
    </Heading>
  );
}) as HeadlineTitleComponent;
