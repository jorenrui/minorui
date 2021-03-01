import { JSXElementConstructor } from 'react';

export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
export type CSSProp<T extends keyof JSX.IntrinsicElements | JSXElementConstructor<any>> = PartialBy<Pick<React.ComponentProps<T>, 'css'>, 'css'>;
