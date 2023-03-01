import { Theme } from "@mui/material";
import { makeStyles, createStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        "@global": {
            "body > header > a > img": {
                zIndex: theme.zIndex.appBar + 100,
            },
        },
        header: {
            minHeight: "64px",
            width: "100%",
            position: "fixed",
            top: 0,
            zIndex: theme.zIndex.appBar,
            transition: "background-color 0.3s ease-in",
            [theme.breakpoints.up("sm")]: {
                paddingTop: theme.spacing(2.5),
                paddingBottom: theme.spacing(2.5),
                zIndex: theme.zIndex.appBar,
            },
        },
        icon: {
            height: "2em",
            width: "2em",
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
        },
        navItemsContainer: {
            display: "flex",
            justifyContent: "center",
            width: "100%",
            listStyleType: "none",
            marginTop: 0,
            marginBottom: 0,
            backgroundColor: "transparent",
            padding: 0,
            alignItems: "center",
        },
        linkItem: {
            margin: `0px ${theme.spacing(1)}`,
            textDecoration: "none",
            color: theme.palette.text.primary,
            transition: "color 0.3s ease-in-out",
            "&:hover": {
                color: theme.palette.primary.light,
            },
        },
        activeLink: {
            "&:hover": {
                color: theme.palette.text.primary,
            },
            "& > h6": {
                cursor: "default",
                borderBottom: `2px solid ${theme.palette.primary.dark}`,
            },
        },
        headerActive: {
            backgroundColor: theme.palette.background.paper,
        },
    })
);

export default useStyles;
