import { createStyles } from "@mui/styles";
import { Theme } from "@mui/material";

const Styles = (theme: Theme) =>
    createStyles({
        mobileHeader: {
            display: "flex",
            minHeight: theme.spacing(8),
            alignItems: "center",
            zIndex: theme.zIndex.appBar,
        },
        icon: {
            height: "2em",
            width: "2em",
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
            fill: theme.palette.text.primary,
        },
        mobileMenu: {
            height: "100vh",
            position: "absolute",
            background: theme.palette.background.default,
            transform: "translateY(calc(50vh - 32px)) translateX(calc(-55vh))",
            width: "100vw",
            transition: "transform 0.3s ease-in-out",
            display: "flex",
            padding: theme.spacing(2),
            flexDirection: "column",
            zIndex: theme.zIndex.appBar + 200,
        },
        mobileMenuOpen: {
            transform: "translateY(calc(50vh - 32px)) translateX(0vh)",
        },
        mobileMenuCloseIcon: {
            height: "2em",
            width: "2em",
            marginLeft: "auto",
            fill: theme.palette.text.primary,
        },
        activeLink: {
            borderBottom: `${theme.spacing(0.5)}px solid ${theme.palette.primary.main}`,
            borderRadius: `${theme.spacing(0.5)}px`,
        },
        linkItem: {
            margin: `${theme.spacing(2)}px 0px`,
            listStyle: "none",
            "& a": {
                textDecoration: "none",
            },
        },
        list: {
            display: "flex",
            width: "100%",
            listStyleType: "none",
            flexDirection: "column",
            marginTop: 0,
            backgroundColor: "transparent",
            flexGrow: 1,
        },
        linkText: {
            fontSize: "2rem",
        },
        mobileNavActiveBodyClass: {
            overflow: "hidden",
            "& header": {
                zIndex: theme.zIndex.appBar + 200, // required to escape darkModeSwitch button
            },
        },
    });

export default Styles;
