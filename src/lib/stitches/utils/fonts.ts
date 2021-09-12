import type * as Stitches from '@stitches/react';

export const FONTS = {
  fontType: (value: Stitches.ScaleValue<'fontSizes'>) => ({
    fontSize: value,
    lineHeight: value,
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
  }),
};
