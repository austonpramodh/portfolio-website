import { createStyles } from "@material-ui/styles";
import { Theme } from "@material-ui/core";

const Styles = (theme: Theme) =>
    createStyles({
        mobileHeader: {
            display: "flex",
            minHeight: theme.spacing(8),
            alignItems: "center",
        },
        icon: {
            height: "2em",
            width: "2em",
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
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
        },
        mobileMenuOpen: {
            transform: "translateY(calc(50vh - 32px)) translateX(0vh)",
        },
        mobileMenuCloseIcon: {
            height: "2em",
            width: "2em",
            marginLeft: "auto",
        },
        activeLink: {
            borderBottom: `${theme.spacing(0.5)}px solid ${theme.palette.primary.main}`,
            borderRadius: `${theme.spacing(0.5)}px`,
        },
        linkItem: {
            margin: `${theme.spacing(2)}px 0px`,
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
        disableBodyScroll: {
            overflow: "hidden",
        },
    });

export default Styles;
