import { styled } from '../lib/stitches';
import { StyledHeadlineTitle } from './headline-title';
import { StyledHeadlineSubTitle } from './headline-subtitle';
import { StyledHeadlineDescription } from './headline-description';
import { StyledHeadlineButton } from './headline-button';

const StyledRoot = styled('div', {
  width: '100%',
  padding: '$100 0',
});

const StyledContent = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr auto',
  fgap: '$50',

  '@downSm': {
    gridTemplateColumns: '1fr',
  },
});

const StyledContentInfo = styled('div', {});

const StyledActionItems = styled('div', {
  display: 'flex',
});

export const Headline = {
  Root: StyledRoot,
  Content: StyledContent,
  ContentInfo: StyledContentInfo,
  Title: StyledHeadlineTitle,
  SubTitle: StyledHeadlineSubTitle,
  Description: StyledHeadlineDescription,
  ActionItems: StyledActionItems,
  Button: StyledHeadlineButton,
};
