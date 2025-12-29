"use client";

import { Chip } from "@mui/material";
import Link from "next/link";

export const Navigator = () => {
    const buttons = [
        {
            label: "Blogs",
            variant: "outlined",
            clickable: true,
            url: "/blogs",
        },
        {
            label: "Resume",
            variant: "outlined",
            clickable: true,
            url: "/resume",
        },
        {
            label: "Contact",
            variant: "outlined",
            clickable: true,
            url: "/contact",
        },
        {
            label: "LinkedIn",
            variant: "outlined",
            clickable: true,
            url: "https://linkedin.com/in/austonpramodh",
        },
    ];
    return (
        <>
            {buttons.map((button, index) => (
                <Link
                    key={index}
                    href={button.url}
                    style={{ textDecoration: "none" }}
                >
                    <Chip
                        key={`${index}-${button.label}`}
                        label={button.label}
                        clickable={button.clickable}
                        variant="outlined"
                        sx={{
                            mx: 1,
                        }}
                    />
                </Link>
            ))}
        </>
    );
};
