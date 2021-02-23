import { THEME } from '../theme';

export const FONTS = {
  fontType: () => (value: keyof typeof THEME['fontSizes'] | (string & {})) => ({
    fontSize: `$${value}`,
    lineHeight: `$${value}`,
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
  }),
};
