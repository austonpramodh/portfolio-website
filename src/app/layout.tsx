import { CssBaseline, InitColorSchemeScript } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import theme from "../theme";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    metadataBase: process.env.NEXT_PUBLIC_URL
        ? new URL(process.env.NEXT_PUBLIC_URL)
        : undefined,
    // metadataBase: new URL("https://willing-daily-perch.ngrok-free.app/"),
    title: {
        template: "%s | Auston Barboza",
        default: "Auston Barboza | Building Intelligent Infrastructure",
    },
    description:
        "Hardware-Enthusiast Turned Software Engineer | Full-Stack Dev | AI & Systems Builder",
    openGraph: {
        images: ["/api/og/profile?size=0.5"],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${geistSans.variable} ${geistMono.variable}`}>
                <InitColorSchemeScript attribute=".mode-%s" />
                <AppRouterCacheProvider options={{ key: "css" }}>
                    <CssBaseline />
                    <ThemeProvider
                        theme={theme}
                        defaultMode="dark"
                        modeStorageKey="mui-mode"
                        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                        // @ts-ignore
                        forceThemeRerender
                    >
                        {children}
                    </ThemeProvider>
                </AppRouterCacheProvider>
            </body>
        </html>
    );
}
