import { createGlobalStyle } from "styled-components";

import { TOAST_CLASS, TOAST_CONTAINER_CLASS } from "@utils/constants/common.constants";
import { ThemeMode } from "@utils/providers/ThemeProvider/ThemeProvider.types";
import { DARK_SHADOW, LIGHT_SHADOW } from "@utils/providers/ThemeProvider/theme.config";


export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: "DM Sans";
        font-style: normal;
        font-weight: 300;
        src: url("/fonts/DMSans/DMSans-Light.ttf");
    }
    
    @font-face {
        font-family: "DM Sans";
        font-style: normal;
        font-weight: 400;
        src: url("/fonts/DMSans/DMSans-Regular.ttf");
    }

    @font-face {
        font-family: "DM Sans";
        font-style: normal;
        font-weight: 500;
        src: url("/fonts/DMSans/DMSans-Medium.ttf");
    }

    * {
        box-sizing: border-box;
    }

    body {
        line-height: 1.5;
    }

    #root {
        display: flex;
        width: 100%;
        height: 100vh;
        overflow: auto;
    }

    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    input:-webkit-autofill:active {
        transition: background-color 5000s ease-in-out 0s !important;
        box-shadow: none !important;
    }

    ::-webkit-scrollbar {
        width: 6px;
        height: 6px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        border-radius: 2.5px;
        background: ${({ theme }) => theme.palette.text.disabled};
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
        border-radius: 2.5px;
        background: ${({ theme }) => theme.palette.primary.main};
    }

    .${TOAST_CLASS} {
        border-radius: 8px;
        color: ${({ theme }) => theme.palette.text.primary};
        font-family: ${({ theme }) => theme.typography.fontFamily};
        background: ${({ theme }) => theme.palette.background.paper};
        box-shadow: ${({ theme }) => (theme.palette.mode === ThemeMode.LIGHT ? LIGHT_SHADOW : DARK_SHADOW)};
    }

    .${TOAST_CONTAINER_CLASS} {
        max-width: 30%;
        width: fit-content;
    }

    :root {
        --toastify-color-info: ${({ theme }) => theme.palette.info.main};
        --toastify-color-success: ${({ theme }) => theme.palette.success.main};
        --toastify-color-warning: ${({ theme }) => theme.palette.warning.main};
        --toastify-color-error: ${({ theme }) => theme.palette.error.main};
    }

`;
