import type * as Stitches from '@stitches/react';

export const POLYFILLS = {
  // * Flex Gap Polyfill
  fgap: (value: Stitches.ScaleValue<'space'>) => {
    const ua = typeof navigator !== 'undefined'
      ? navigator.userAgent.toLowerCase()
      : '';

    if (ua.indexOf('safari') != -1) {
      return ({
        margin: `calc(-1 * ${value}) 0 0 calc(-1 * ${value})`,

        '& > *': {
          margin: `${value} 0 0 ${value}`,
        },
      });
    }

    return ({
      gap: value,
    });
  },
};
