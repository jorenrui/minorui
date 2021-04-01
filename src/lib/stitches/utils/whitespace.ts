import { THEME } from '../theme';
import { SPACE } from '../theme/space';
import { RADII } from '../theme/radii';

type ThemeSpace = {
  [K in keyof typeof SPACE as `$${K}`]: any
}

type ThemeSize = {
  [K in keyof typeof SPACE as `$${K}`]: any
}

type ThemeRadii = {
  [K in keyof typeof RADII as `$${K}`]: any
}

export const WHITESPACE = {
  fontType: () => (value: keyof typeof THEME['fontSizes']) => ({
    fontSize: `$${value}`,
    lineHeight: `$${value}`,
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
  }),
  m: () => (value: keyof ThemeSpace | number | (string & {})) => ({
    marginTop: value,
    marginBottom: value,
    marginLeft: value,
    marginRight: value,
  }),
  mt: () => (value: keyof ThemeSpace | number | (string & {})) => ({
    marginTop: value,
  }),
  mr: () => (value: keyof ThemeSpace | number | (string & {})) => ({
    marginRight: value,
  }),
  mb: () => (value: keyof ThemeSpace | number | (string & {})) => ({
    marginBottom: value,
  }),
  ml: () => (value: keyof ThemeSpace | number | (string & {})) => ({
    marginLeft: value,
  }),
  mx: () => (value: keyof ThemeSpace | number | (string & {})) => ({
    marginLeft: value,
    marginRight: value,
  }),
  my: () => (value: keyof ThemeSpace | number | (string & {})) => ({
    marginTop: value,
    marginBottom: value,
  }),
  p: () => (value: keyof ThemeSpace | number | (string & {})) => ({
    paddingTop: value,
    paddingBottom: value,
    paddingLeft: value,
    paddingRight: value,
  }),
  pt: () => (value: keyof ThemeSpace | number | (string & {})) => ({
    paddingTop: value,
  }),
  pr: () => (value: keyof ThemeSpace | number | (string & {})) => ({
    paddingRight: value,
  }),
  pb: () => (value: keyof ThemeSpace | number | (string & {})) => ({
    paddingBottom: value,
  }),
  pl: () => (value: keyof ThemeSpace | number | (string & {})) => ({
    paddingLeft: value,
  }),
  px: () => (value: keyof ThemeSpace | number | (string & {})) => ({
    paddingLeft: value,
    paddingRight: value,
  }),
  py: () => (value: keyof ThemeSpace | number | (string & {})) => ({
    paddingTop: value,
    paddingBottom: value,
  }),
  size: () => (value: keyof ThemeSize | number | (string & {})) => ({
    width: value,
    height: value,
  }),
  linearGradient: () => (value: (string & {})) => ({
    backgroundImage: `linear-gradient(${value})`,
  }),
  br: () => (value: keyof ThemeRadii | number | (string & {})) => ({
    borderRadius: value,
  }),
};
