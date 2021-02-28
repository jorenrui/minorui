import { createCss, StitchesCss } from '@stitches/react';

import { THEME } from './theme';
import { CONDITIONS } from './conditions';
import { UTILS } from './utils';

const stitchesConfig = createCss({
  prefix: '',
  theme: THEME,
  conditions: CONDITIONS,
  utils: UTILS,
});

export const Theme = THEME;
export const {
  styled,
  css,
  global,
  theme,
  keyframes,
  getCssString,
} = stitchesConfig;

export type CSS = StitchesCss<typeof stitchesConfig>;
