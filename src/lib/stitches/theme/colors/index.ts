import { BLUE } from './blue';
import { GRAY } from './gray';
import { GREEN } from './green';
import { RED } from './red';
import { YELLOW } from './yellow';
import { PURPLE } from './purple';
import { PINK } from './pink';

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
  primary: '$gray900',
  accent: '$purple600',
};
