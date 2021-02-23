import { StitchesVariants } from '@stitches/core';
import { css, styled } from '../lib/stitches';

export const box = css({});
export const Box = styled('div', {});

export type IBoxVariants = StitchesVariants<typeof Box>;
