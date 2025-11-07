import type { Theme } from "@mui/material/styles";

export enum ThemeMode {
  LIGHT = "light",
  DARK = "dark"
}

export interface ThemeContextValue {
  mode: ThemeMode;
  setThemeMode: (theme: ThemeMode) => void;
  toggleThemeMode: () => void;
  theme: Theme;
};