import { ThemeProvider as SCThemeProvider } from "styled-components";

import React, {
  FC,
  PropsWithChildren,
  useCallback,
  useMemo,
  useState
} from "react";

import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";

import { useMuiLocale } from "@utils/hooks/useMuiLocale";
import { ThemeMode, ThemeContextValue } from "./ThemeProvider.types";
import { getThemeOptions, INITIAL_THEME_MODE, ThemeContext } from "./ThemeProvider.context";
import { LocalStorage } from "@utils/enums/common.enums";

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const [mode, setMode] = useState<ThemeMode>(INITIAL_THEME_MODE);
  const locale = useMuiLocale();
  const theme = createTheme(getThemeOptions(mode), locale);

  const setThemeMode = useCallback(
    (themeMode: ThemeMode) => {
      setMode(themeMode);
      localStorage.setItem(LocalStorage.THEME, themeMode);
    },
    [setMode]
  );

  const toggleThemeMode = useCallback(() => {
    setThemeMode(mode === ThemeMode.DARK ? ThemeMode.LIGHT : ThemeMode.DARK);
  }, [setThemeMode, mode]);

  const contextValue: ThemeContextValue = useMemo(
    () => ({
      mode,
      theme,
      setThemeMode,
      toggleThemeMode
    }),
    [mode, theme, setThemeMode, toggleThemeMode]
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      <SCThemeProvider theme={theme}>
        <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
      </SCThemeProvider>
    </ThemeContext.Provider>
  );
};
