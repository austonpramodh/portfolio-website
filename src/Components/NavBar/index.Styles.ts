import { createStyles } from "@material-ui/styles";
import { Theme } from "@material-ui/core";

const Styles = (theme: Theme) =>
    createStyles({
        header: {
            minHeight: "64px",
            width: "100%",
            paddingLeft: theme.spacing(1),
            paddingRight: theme.spacing(1),
            position: "fixed",
            zIndex: theme.zIndex.appBar,
            transition: "background-color 0.3s ease-in",
            [theme.breakpoints.up("sm")]: {
                paddingTop: theme.spacing(2.5),
                paddingBottom: theme.spacing(2.5),
            },
        },
        mobileHeader: {
            display: "flex",
            minHeight: theme.spacing(8),
            alignItems: "center",
        },
        icon: {
            height: "2em",
            width: "2em",
        },
        list: {
            position: "fixed",
            display: "flex",
            justifyContent: "center",
            width: "100%",
            listStyleType: "none",
            marginTop: 0,
            backgroundColor: "transparent",
        },
        linkItem: {
            margin: `0px ${theme.spacing(1)}px`,
            transition: "color 0.3s ease-in-out",
            "&:hover": {
                color: theme.palette.primary.light,
            },
        },
        activeLink: {
            borderBottom: `2px solid ${theme.palette.primary.dark}`,
            "&:hover": {
                color: theme.palette.text.primary,
            },
            "&>a": {
                cursor: "default",
            },
        },
    });

export default Styles;
