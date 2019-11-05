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
            [theme.breakpoints.up("sm")]: {
                paddingTop: "20px",
                paddingBottom: "20px",
            },
        },
        mobileHeader: {
            display: "flex",
            minHeight: "64px",
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
        },
        activeLink: {
            color: "blue",
        },
    });

export default Styles;
