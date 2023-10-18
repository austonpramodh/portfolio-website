import Document, { Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps } from "next/document";
import createEmotionCache, { emotionCacheInsertionPointKey } from "../createEmotionCache";
import { DarkTheme as theme } from "../theme";
import createEmotionServer from "@emotion/server/create-instance";
import React from "react";
// TODO: remove this after we have completely moved to new mui
// https://stackoverflow.com/questions/50685175/react-material-ui-warning-prop-classname-did-not-match
import { ServerStyleSheets } from "@mui/styles";
import Script from "next/script";

type AppDocumentInitialProps = {
    emotionStyleTags: JSX.Element[];
} & DocumentInitialProps;

export default class AppDocument extends Document<AppDocumentInitialProps> {
    // `getInitialProps` belongs to `_document` (instead of `_app`),
    // it's compatible with static-site generation (SSG).
    static async getInitialProps(ctx: DocumentContext): Promise<AppDocumentInitialProps> {
        // Resolution order
        //
        // On the server:
        // 1. app.getInitialProps
        // 2. page.getInitialProps
        // 3. document.getInitialProps
        // 4. app.render
        // 5. page.render
        // 6. document.render
        //
        // On the server with error:
        // 1. document.getInitialProps
        // 2. app.render
        // 3. page.render
        // 4. document.render
        //
        // On the client
        // 1. app.getInitialProps
        // 2. page.getInitialProps
        // 3. app.render
        // 4. page.render

        const sheets = new ServerStyleSheets(); // MUI Styles - Old
        const originalRenderPage = ctx.renderPage;

        // You can consider sharing the same Emotion cache between all the SSR requests to speed up performance.
        // However, be aware that it can have global side effects.
        const cache = createEmotionCache();
        const { extractCriticalToChunks } = createEmotionServer(cache);

        ctx.renderPage = () =>
            originalRenderPage({
                enhanceApp: (App: React.ComponentType<any>) => (props: any) =>
                    sheets.collect(
                        <App
                            // emotionCache={cache}
                            {...props}
                        />
                    ),
            });

        const initialProps = await Document.getInitialProps(ctx);
        // This is important. It prevents Emotion to render invalid HTML.
        // See https://github.com/mui/material-ui/issues/26561#issuecomment-855286153
        const emotionStyles = extractCriticalToChunks(initialProps.html);
        const emotionStyleTags = emotionStyles.styles.map((style) => (
            <style
                data-emotion={`${style.key} ${style.ids.join(" ")}`}
                key={style.key}
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{ __html: style.css }}
            />
        ));

        return {
            ...initialProps,
            emotionStyleTags,
            // Mui/Styles
            styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()],
        };
    }

    render() {
        return (
            <Html lang="en">
                <Head>
                    {/* PWA primary color */}
                    <meta name="theme-color" content={theme.palette.primary.main} />
                    <link rel="shortcut icon" href="/favicon.ico" />
                    <meta name={emotionCacheInsertionPointKey} content="" />
                    {this.props.emotionStyleTags}
                </Head>
                <body>
                    <Main />
                    <NextScript />
                    <Script
                        defer
                        async
                        src="https://static.cdn.prismic.io/prismic.js?new=true&repo=auston-portfolio-v2"
                    />
                </body>
            </Html>
        );
    }
}
