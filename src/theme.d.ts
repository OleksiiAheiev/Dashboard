import "@mui/material/Button";
import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    custom: PaletteColor;
    table: PaletteColor;
  }

  interface PaletteOptions {
    custom?: PaletteColorOptions;
    table?: PaletteColorOptions;
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    custom: true;
    table: true;
  }

  interface ButtonClasses {
    containedCustom: true;
    containedTable: true;
  }
}
