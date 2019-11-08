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
            marginBottom: `${theme.spacing(1)}px !important`,
        },
        containerMediaQueries: { ...MainContainerMediaQueries(theme).root },
        contactCardsContainer: {
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            [theme.breakpoints.up("md")]: {
                flexDirection: "row",
            },
        },
        iconContainer: {
            height: "70px",
            width: "70px",
            borderRadius: "50%",
            border: `1px solid ${theme.palette.primary.main}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: theme.spacing(2),
            marginBottom: theme.spacing(1),
        },
        icon: {},
        paper: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginTop: theme.spacing(2),
            marginBottom: theme.spacing(2),
        },
        cardHeading: {
            marginTop: theme.spacing(1),
            marginBottom: theme.spacing(1),
        },
        content: {
            marginTop: theme.spacing(1),
            marginBottom: theme.spacing(1),
        },
        footer: {
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            [theme.breakpoints.up("md")]: {
                flexDirection: "row",
            },
        },
        footerText: {
            fontWeight: "bold",
            width: "100%",
        },
        footerLinksContainer: {
            width: "100%",
        },
        contactFormHeading: {
            marginTop: theme.spacing(2),
        },
    });

export default Styles;
