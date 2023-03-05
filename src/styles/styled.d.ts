import 'styled-components';

import { Theme } from './theme/default.styles';

export type ITheme = typeof Theme

declare module 'styled-components' {
  export interface DefaultTheme extends ITheme {}
}