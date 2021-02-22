import { createCss, StitchesCss } from '@stitches/react';

import { THEME } from './theme';
import { CONDITIONS } from './conditions';
import { UTILS } from './utils';

export const BASE_SPACING = 5;

const stitchesConfig = createCss({
  prefix: '',
  theme: THEME,
  conditions: CONDITIONS,
  utils: UTILS,
});

export const {
  styled,
  css,
  global,
  theme,
  keyframes,
  getCssString,
} = stitchesConfig;

export type CSS = StitchesCss<typeof stitchesConfig>;
