"use client";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";

export const theme = {
    typography: {
        fontFamily: "var(--font-geist-sans)",
    },
    cssVariables: {
        colorSchemeSelector: ".mode-%s",
        cssVarPrefix: "--mui-theme",
    },
    colorSchemes: {
        light: {
            palette: {
                primary: {
                    main: "#000000",
                },
                secondary: {
                    main: "#ffffff",
                },
                background: {
                    default: "#f5f5f5",
                    paper: "#ffffff",
                },
                text: {
                    primary: "#000000",
                    secondary: "#555555",
                },
            },
        },
        dark: {
            palette: {
                primary: {
                    main: "#ffffff",
                },
                secondary: {
                    main: "#000000",
                },
                background: {
                    default: "#121212",
                    paper: "#1e1e1e",
                },
                text: {
                    primary: "#ffffff",
                    secondary: "#bbbbbb",
                },
            },
        },
    },
};

export default responsiveFontSizes(createTheme(theme));
