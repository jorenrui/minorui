import React from 'react';
import type * as Stitches from '@stitches/react';
import type * as Polymorphic from '@radix-ui/react-polymorphic';

import { Text } from '../Text';
import { CSSProp } from '../lib/types';
import { object } from '../lib/helpers/object';

const DEFAULT_TAG = 'p';

type TextCSSProp = CSSProp<typeof Text>;
type TextVariants = Stitches.VariantProps<typeof Text>;
type TextOwnProps = TextCSSProp & TextVariants;

type HeadlineSubTitleComponent = Polymorphic.ForwardRefComponent<typeof DEFAULT_TAG, TextOwnProps>;

export const StyledHeadlineSubTitle = React.forwardRef((props, forwardedRef) => {
  const {
    size = 'sm',
    color = 'tertiary',
    children,
    css,
    ...restProps
  } = props;

  return (
    <Text
      ref={forwardedRef}
      color={color}
      size={size}
      css={{ margin: '$30 0', ...object(css) }}
      {...restProps}
    >
      {children}
    </Text>
  );
}) as HeadlineSubTitleComponent;
