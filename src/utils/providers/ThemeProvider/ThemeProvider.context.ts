import {
  createContext,
  useContext,
} from "react";
import { enUS } from "@mui/material/locale";
import { ThemeMode, ThemeContextValue } from "./ThemeProvider.types";
import { createTheme } from "@mui/material/styles";
import type { ThemeOptions } from "@mui/material/styles";
import { LocalStorage } from "@utils/enums/common.enums";
import { MUI_THEMES } from "./theme.config";

export function getThemeOptions(mode: ThemeMode): ThemeOptions {
  if (mode === ThemeMode.DARK) {
    return MUI_THEMES[ThemeMode.DARK];
  }

  return MUI_THEMES[ThemeMode.LIGHT];
}

export const INITIAL_THEME_MODE =
  (localStorage.getItem(LocalStorage.THEME) as ThemeMode) ?? ThemeMode.LIGHT;

export const ThemeContext = createContext<ThemeContextValue>({
  mode: INITIAL_THEME_MODE,
  setThemeMode: () => { },
  toggleThemeMode: () => { },
  theme: createTheme(getThemeOptions(INITIAL_THEME_MODE), enUS)
});

export const useThemeContext = () => useContext(ThemeContext);
