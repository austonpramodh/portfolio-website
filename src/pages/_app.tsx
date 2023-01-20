import "../styles/globals.css";
import { DarkTheme } from "../theme";
import { ThemeProvider } from "@mui/material";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={DarkTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
