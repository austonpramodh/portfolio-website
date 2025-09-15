"use client";

import { useTheme } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";

export const ThemeAwareImageCreator: React.FC<{
    title: string;
    description: string;
    background?: string;
    primaryTextColor?: string;
    secondaryTextColor?: string;
}> = ({
    title,
    description,
    background,
    primaryTextColor,
    secondaryTextColor,
}) => {
    const theme = useTheme();

    const [state, setState] = useState<{
        isReady: boolean;
    }>({
        isReady: false,
    });

    useEffect(() => {
        setState({ isReady: true });
    }, [theme]);

    const selectedBgColor = background ?? theme.palette.background.default;
    const selectedPrimaryTxtColor =
        primaryTextColor ?? theme.palette.text.primary;
    const selectedSecondaryTxtColor =
        secondaryTextColor ?? theme.palette.text.secondary;

    return (
        <Image
            key={
                "&background=" +
                encodeURIComponent(selectedBgColor) +
                "&primaryTextColor=" +
                encodeURIComponent(selectedPrimaryTxtColor) +
                "&secondaryTextColor=" +
                encodeURIComponent(selectedSecondaryTxtColor) +
                "&isBlank=" +
                state.isReady
            }
            src={
                "/api/og?title=" +
                title +
                "&description=" +
                description +
                "&background=" +
                encodeURIComponent(selectedBgColor) +
                "&primaryTextColor=" +
                encodeURIComponent(selectedPrimaryTxtColor) +
                "&secondaryTextColor=" +
                encodeURIComponent(selectedSecondaryTxtColor) +
                "&isBlank=" +
                !state.isReady
            }
            height={630}
            width={1200}
            alt={title}
            style={{
                height: "auto",
                width: "100%",
            }}
        />
    );
};
