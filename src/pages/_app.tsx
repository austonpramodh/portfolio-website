import "../styles/globals.css";
import { DarkTheme } from "../theme";
import { ThemeProvider } from "@mui/material";
import type { AppProps } from "next/app";
import createEmotionCache from "../createEmotionCache";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { GoogleAnalytics } from "nextjs-google-analytics";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
    emotionCache?: EmotionCache;
}

export default function App(props: MyAppProps) {
    const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

    return (
        <>
            <GoogleAnalytics trackPageViews />
            <CacheProvider value={emotionCache}>
                <ThemeProvider theme={DarkTheme}>
                    <Component {...pageProps} />
                </ThemeProvider>
            </CacheProvider>
        </>
    );
}
