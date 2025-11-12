import { ThemeOptions } from "@mui/material";
import { hexToRgba } from "@utils/helpers/hexToRgba";
import { ThemeMode } from "@utils/providers/ThemeProvider";

export const LIGHT_SHADOW = "0px 1px 14px 0px rgba(0, 0, 0, 0.12)";
export const DARK_SHADOW = "0px 1px 14px 0px rgba(0, 0, 0, 0.3)";

const LIGHT_PALETTE: ThemeOptions['palette'] = {
  mode: ThemeMode.LIGHT,
  background: {
    default: '#fafafa',
    paper: '#ffffff'
  },
  text: {
    primary: '#262626',
    secondary: hexToRgba('#262626', 0.5),
    disabled: hexToRgba('#262626', 0.3)
  },
  primary: {
    main: '#1890FF',
    light: '#69C0FF',
    contrastText: '#ffffff'
  },
  secondary: {
    main: '#8c8c8c',
    light: '#bfbfbf',
    contrastText: '#262626'
  },
  success: {
    main: '#52C41A',
    light: '#95DE64',
    contrastText: '#ffffff'
  },
  warning: {
    main: '#FAAD14',
    light: '#FFD666',
    contrastText: '#000000'
  },
  error: {
    main: '#F5222D',
    light: '#FF7875'
  },
  info: {
    main: '#1890FF',
    light: '#91D5FF'
  },
  divider: hexToRgba('#8c8c8c', 0.3),
  action: {
    hover: '#f0f0f0'
  }
}

const DARK_PALETTE: ThemeOptions['palette'] = {
  mode: ThemeMode.DARK,
  background: {
    default: '#141414',
    paper: '#1f1f1f'
  },
  text: {
    primary: '#f5f5f5',
    secondary: hexToRgba('#f5f5f5', 0.5),
    disabled: '#8c8c8c'
  },
  primary: {
    main: '#177DDC',
    light: '#3C9AE8',
    contrastText: '#ffffff'
  },
  secondary: {
    main: '#8c8c8c',
    light: '#bfbfbf',
    contrastText: '#262626'
  },
  success: {
    main: '#49AA19',
    light: '#73D13D',
    contrastText: '#ffffff'
  },
  warning: {
    main: '#FAAD14',
    light: '#FFD666',
    contrastText: '#000000'
  },
  error: {
    main: '#F5222D',
    light: '#FF7875'
  },
  info: {
    main: '#177DDC',
    light: '#69C0FF'
  },
  divider: '#434343',
  action: {
    hover: '#262626'
  }
}
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
