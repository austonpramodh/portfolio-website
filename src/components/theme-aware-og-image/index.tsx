"use client";

import { useTheme } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";

export const ThemeAwareImageCreator: React.FC<{
    title: string;
    description: string;
    background?: string;
    primaryTxtColor?: string;
    secondaryTxtColor?: string;
}> = ({
    title,
    description,
    background,
    primaryTxtColor,
    secondaryTxtColor,
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
        primaryTxtColor ?? theme.palette.text.primary;
    const selectedSecondaryTxtColor =
        secondaryTxtColor ?? theme.palette.text.secondary;

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
