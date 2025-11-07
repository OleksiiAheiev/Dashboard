/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Theme } from "@mui/material/styles";

declare module "styled-components" {
  export interface DefaultTheme extends Theme {
    palette: Theme["palette"];
  }
}

declare module "react" {
  interface DOMAttributes<T> {
    css?: CSSProp;
  }
}
