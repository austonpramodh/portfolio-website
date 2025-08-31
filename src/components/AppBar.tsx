"use client";

import { ModeSwitcher } from "@/app/ModeSwitcher";
import MenuIcon from "@mui/icons-material/Menu";
import {
    Box,
    Button,
    Container,
    IconButton,
    Menu,
    MenuItem,
    AppBar as MUIAppBar,
    Toolbar,
    Typography,
} from "@mui/material";
import Link from "next/link";
import React from "react";

const pages = [
    { label: "Blogs", link: "/blogs" },
    {
        label: "Resume",
        link: "/resume",
    },
    { label: "Contact", link: "/contact" },
];

export const AppBar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
        null
    );

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <MUIAppBar
            position="sticky"
            sx={{
                zIndex: 999,
                bgcolor: "background.default",
            }}
        >
            <Container>
                <Toolbar disableGutters>
                    <Box
                        sx={{
                            mr: 2,
                            display: { xs: "none", md: "flex" },
                            color: "inherit",
                            flexGrow: 1,
                            position: "relative",
                            maxWidth: (223 * 3.5) / 4,
                        }}
                    >
                        <Link href={"/"}>
                            <Typography color="text.primary" variant="h6">
                                Auston.dev
                            </Typography>
                        </Link>
                    </Box>
                    <Box
                        sx={{
                            // flexGrow: 1,
                            display: { xs: "flex", md: "none" },
                        }}
                    >
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                        >
                            <MenuIcon
                                sx={{
                                    // FIXME: move this to theme color
                                    fill: "#9497a1",
                                }}
                            />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "left",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "left",
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{ display: { xs: "block", md: "none" } }}
                        >
                            {pages.map((page) => (
                                <Link
                                    key={page.link}
                                    href={page.link}
                                    onClick={() => {
                                        handleCloseNavMenu();
                                    }}
                                >
                                    <MenuItem key={page.link}>
                                        <Typography
                                            sx={{ textAlign: "center" }}
                                        >
                                            {page.label}
                                        </Typography>
                                    </MenuItem>
                                </Link>
                            ))}
                        </Menu>
                    </Box>
                    <Box
                        sx={{
                            display: { xs: "flex", md: "none" },
                            flexGrow: 1,
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <Box
                            sx={{
                                flexGrow: 1,
                                position: "relative",
                                maxWidth: (223 * 3.5) / 4,
                            }}
                        >
                            <Link href={"/"}>
                                <Typography color="text.primary">
                                    Auston.dev
                                </Typography>
                            </Link>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: "none", md: "flex" },
                            justifyContent: "right",
                            pr: { md: 4, xl: 0 },
                        }}
                    >
                        {pages.map((page) => (
                            <Link
                                key={page.link}
                                href={page.link}
                                onClick={() => {
                                    handleCloseNavMenu();
                                }}
                            >
                                <Button
                                    key={page.link}
                                    sx={{
                                        display: "block",
                                        mx: 0.5,
                                        color: "text.secondary",
                                        fontWeight: "600",
                                    }}
                                >
                                    {page.label}
                                </Button>
                            </Link>
                        ))}
                    </Box>
                </Toolbar>

                <ModeSwitcher />
            </Container>
        </MUIAppBar>
    );
};
