import { THEME } from '../theme';

export const FONTS = {
  fontType: () => (value: keyof typeof THEME['fontSizes'] | (string & {})) => ({
    fontSize: `$${value}`,
    lineHeight: `$${value}`,
  }),
};
