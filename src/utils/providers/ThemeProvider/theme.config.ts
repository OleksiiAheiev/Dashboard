import { ThemeOptions } from "@mui/material";
import { hexToRgba } from "@utils/helpers/hexToRgba";
import { ThemeMode } from "@utils/providers/ThemeProvider";

export const LIGHT_SHADOW = "0px 1px 14px 0px rgba(0, 0, 0, 0.12)";
export const DARK_SHADOW = "0px 1px 14px 0px rgba(0, 0, 0, 0.3)";

export const LIGHT_PALETTE: ThemeOptions["palette"] = {
  mode: ThemeMode.LIGHT,
  background: {
    default: "#FFFBED",
    paper: "#FFFBED"
  },
  text: {
    primary: "#282828",
    secondary: hexToRgba("#282828", 0.5),
    disabled: hexToRgba("#282828", 0.3)
  },
  primary: {
    main: "#076678",
    light: "#458588",
    contrastText: "#ffffff"
  },
  secondary: {
    main: "#8F3F71",
    light: "#FB9678",
    contrastText: "#D65D0E"
  },
  success: {
    main: "#689D6A",
    light: "#427B58",
    contrastText: "#8EC07C"
  },
  warning: {
    main: "#FEC90F4D",
    light: "#FABD2F",
    contrastText: "#FFB200"
  },
  error: {
    main: "#9D0006",
    light: "#CC241D"
  },
  info: {
    main: "#076678",
    light: "#1A9BFC4D"
  },
  divider: hexToRgba("#282828", 0.3),
  action: {
    hover: "#83A598"
  }
};

export const DARK_PALETTE: ThemeOptions["palette"] = {
  mode: ThemeMode.DARK,
  background: {
    default: "#191919",
    paper: "#202020"
  },
  text: {
    primary: "#EBDBB2",
    secondary: hexToRgba("#EBDBB2", 0.5),
    disabled: "#7A7A7A"
  },
  primary: {
    main: "#076678",
    light: "#458588",
    contrastText: "#FBF1C7"
  },
  secondary: {
    main: "#8F3F71",
    light: "#FB9678",
    contrastText: "#D65D0E"
  },
  success: {
    main: "#689D6A",
    light: "#39CB7F4D",
    contrastText: "#8EC07C"
  },
  warning: {
    main: "#FFA726",
    light: "#FABD2F",
    contrastText: "#D32F2F"
  },
  error: {
    main: "#CC241D",
    light: "#CC241D"
  },
  info: {
    main: "#458588",
    light: "#1A9BFC4D"
  },
  divider: "#333333",
  action: {
    hover: "#83A598"
  }
};

const LIGHT_COMPONENTS: ThemeOptions["components"] = {

};

const DARK_COMPONENTS: ThemeOptions["components"] = {

};

const TYPOGRAPHY: ThemeOptions["typography"] = {
  fontFamily: "'DM Sans', sans-serif"
};

const LIGHT_THEME: ThemeOptions = {
  palette: LIGHT_PALETTE,
  typography: TYPOGRAPHY,
  components: LIGHT_COMPONENTS
};

const DARK_THEME: ThemeOptions = {
  palette: DARK_PALETTE,
  typography: TYPOGRAPHY,
  components: DARK_COMPONENTS
};

export const MUI_THEMES = {
  [ThemeMode.DARK]: DARK_THEME,
  [ThemeMode.LIGHT]: LIGHT_THEME
};
