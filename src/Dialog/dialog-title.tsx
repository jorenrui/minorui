import React from 'react';
import type * as Stitches from '@stitches/react';
import type * as Polymorphic from '@radix-ui/react-polymorphic';

import { Heading } from '../Heading';
import { CSSProp } from '../lib/types';
import { object } from '../lib/helpers/object';

const DEFAULT_TAG = 'h2';

type HeadingCSSProp = CSSProp<typeof Heading>;
type HeadingVariants = Stitches.VariantProps<typeof Heading>;
type HeadingOwnProps = HeadingCSSProp & HeadingVariants;

type DialogTitleComponent = Polymorphic.ForwardRefComponent<typeof DEFAULT_TAG, HeadingOwnProps>;

export const DialogTitle = React.forwardRef((props, forwardedRef) => {
  const {
    size = '4xl',
    children,
    css,
    as,
    ...restProps
  } = props;

  return (
    <Heading
      ref={forwardedRef}
      as={'h2' || as}
      size={size}
      css={{ textAlign: 'center', ...object(css) }}
      {...restProps}
    >
      {children}
    </Heading>
  )
}) as DialogTitleComponent;
