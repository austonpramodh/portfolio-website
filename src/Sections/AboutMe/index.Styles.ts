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
            [theme.breakpoints.up("md")]: {
                flexDirection: "row",
            },
        },
        containerMediaQueries: { ...MainContainerMediaQueries(theme).root },
        imageContainer: {
            height: "auto",
            width: "90%",
            margin: theme.spacing(1),
        },
        contentContainer: {
            padding: theme.spacing(1),
            maxWidth: "90%",
            display: "flex",
            flexDirection: "column",
        },
        texts: {
            padding: 4,
        },
        skillListItem: {
            padding: `${theme.spacing(0.5)}px ${theme.spacing(1)}px`,
            width: "auto",
            border: `1px solid ${theme.palette.primary.main}`,
            borderRadius: theme.spacing(0.5),
            margin: `${theme.spacing(0.5)}px ${theme.spacing(1)}px`,
        },
        skillList: {
            margin: `${theme.spacing(2)}px 0px`,
            padding: 0,
            listStyleType: "none",
            listStyleImage: "none",
            display: "flex ",
            flexWrap: "wrap",
            justifyContent: "center",
        },
        cvDownloadButton: {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.text.primary,
            padding: `${theme.spacing(1)}px ${theme.spacing(4)}px`,
            borderRadius: 20,
            margin: "auto",
        },
        downloadIcon: {
            marginLeft: theme.spacing(0.5),
        },
        cvDownloadText: {
            fontWeight: "bold",
        },
    });

export default Styles;
