import React from 'react';
import { StitchesVariants } from '@stitches/react';
import type * as Polymorphic from '@radix-ui/react-polymorphic';

import { Text } from '../Text';
import { CSSProp } from '../lib/types';
import { object } from '../lib/helpers/object';

const DEFAULT_TAG = 'p';

type TextCSSProp = CSSProp<typeof Text>;
type TextVariants = StitchesVariants<typeof Text>;
type TextOwnProps = TextCSSProp & TextVariants;

type HeadlineDescriptionComponent = Polymorphic.ForwardRefComponent<
  typeof DEFAULT_TAG, TextOwnProps
>;

export const StyledHeadlineDescription = React.forwardRef((props, forwardedRef) => {
  const {
    color = 'secondary',
    children,
    css,
    ...restProps
  } = props;

  return (
    <Text
      ref={forwardedRef}
      color={color}
      css={{ margin: '$30 0', ...object(css) }}
      {...restProps}
    >
      {children}
    </Text>
  );
}) as HeadlineDescriptionComponent;
