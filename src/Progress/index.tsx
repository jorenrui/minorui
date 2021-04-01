import * as RadixProgress from '@radix-ui/react-progress';
import { styled } from '../lib/stitches';

const Root = styled(RadixProgress.Root, {
  position: 'relative',
  height: 10,
  overflow: 'hidden',
  borderRadius: 5,
  background: '$gray200',
});

const Indicator = styled(RadixProgress.Indicator, {
  boxSizing: 'border-box',
  position: 'absolute',
  backgroundColor: '$primary',
  height: '100%',
});

export const Progress = {
  Root,
  Indicator,
};
