import { BLUE } from './blue';
import { GRAY } from './gray';
import { GREEN } from './green';
import { RED } from './red';
import { YELLOW } from './yellow';
import { PURPLE } from './purple';
import { PINK } from './pink';
import { PRIMARY } from './primary';
import { ACCENT } from './accent';

export const COLORS = {
  white: 'hsl(0,0%,100%)',
  black: 'hsl(0,0%,0%)',
  ...GRAY,
  ...RED,
  ...BLUE,
  ...GREEN,
  ...YELLOW,
  ...PURPLE,
  ...PINK,
  ...PRIMARY,
  ...ACCENT,
  text: '$gray900',
  primary: '$gray900',
  primaryText: '$white',
  accent: '$purple600',
  accentText: '$white',
  info: '$blue700',
  infoText: '$white',
  warning: '$yellow700',
  warningText: '$white',
  positive: '$green700',
  positiveText: '$white',
  negative: '$red700',
  negativeText: '$white',
};
