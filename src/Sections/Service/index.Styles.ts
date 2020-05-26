import { createStyles } from "@material-ui/styles";
import { Theme } from "@material-ui/core";
import MainContainerMediaQueries from "../../Constants/MainContainerMediaQueries";

const Styles = (theme: Theme) =>
    createStyles({
        container: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            textAlign: "left",
        },
        containerMediaQueries: {
            ...MainContainerMediaQueries(theme).root,
            [theme.breakpoints.up("lg")]: {
                width: "100%",
            },
        },
        header: {
            marginTop: theme.spacing(1),
            marginBottom: theme.spacing(2),
        },
        paper: {
            [theme.breakpoints.up("lg")]: {
                maxWidth: 290,
            },
        },
        icon: {
            height: 32,
            width: 32,
            [theme.breakpoints.up("sm")]: {
                height: 48,
                width: 48,
            },
        },
        servicesContainer: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            [theme.breakpoints.up("md")]: {
                flexDirection: "row",
                flexWrap: "wrap",
            },
            "& > div": {
                display: "flex",
                flexDirection: "inherit",
                "& div": {
                    zIndex: 1,
                },
            },
        },
    });

export default Styles;
