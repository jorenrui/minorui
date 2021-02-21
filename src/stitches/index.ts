import { createCss, StitchesCss } from '@stitches/react';

import { THEME } from './theme';
import { CONDITIONS } from './conditions';

export const BASE_SPACING = 5;

const stitchesConfig = createCss({
  prefix: '',
  theme: THEME,
  conditions: CONDITIONS,
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
