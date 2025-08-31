"use client";

import { DarkMode, LightMode } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useColorScheme } from "@mui/material/styles";

export const ModeSwitcher = () => {
    const { mode, setMode } = useColorScheme();
    return (
        <>
            <IconButton
                onClick={() => setMode(mode === "light" ? "dark" : "light")}
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
            </IconButton>
        </>
    );
};
