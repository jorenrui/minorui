import { createStitches } from '@stitches/react';
import type * as Stitches from '@stitches/react';

import { THEME } from './theme';
import { MEDIA } from './media';
import { UTILS } from './utils';

const stitchesConfig = createStitches({
  prefix: '',
  theme: THEME,
  media: MEDIA,
  utils: UTILS,
});

export const Theme = THEME;
export const {
  styled,
  css,
  globalCss,
  theme,
  keyframes,
  getCssText,
} = stitchesConfig;

export type CSS = Stitches.CSS<typeof stitchesConfig>;
