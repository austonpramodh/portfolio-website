"use client";

import { BrightnessAuto, DarkMode, LightMode } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useColorScheme } from "@mui/material/styles";

export const ModeSwitcher = () => {
    const { mode, setMode } = useColorScheme();
    console.log(mode);

    const cycleMode = () => {
        if (mode === "light") setMode("dark");
        else if (mode === "dark") setMode("system");
        else setMode("light"); // system → light
    };

    return (
        <>
            <IconButton
                onClick={cycleMode}
                sx={{
                    position: "fixed",
                    top: 12,
                    right: 16,
                    zIndex: 1000,
                }}
                aria-label="Toggle color mode"
            >
                <DarkMode
                    sx={{
                        display: mode === "dark" ? "block" : "none",
                        fontSize: {
                            xs: 20,
                            md: 24,
                        },
                    }}
                />
                <LightMode
                    sx={{ display: mode === "light" ? "block" : "none" }}
                />

                <BrightnessAuto
                    sx={{ display: mode === "system" ? "block" : "none" }}
                />
            </IconButton>
        </>
    );
};
