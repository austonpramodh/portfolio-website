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
            marginTop: "0px !important",
            [theme.breakpoints.up("md")]: {
                flexDirection: "row",
            },
        },
        containerMediaQueries: { ...MainContainerMediaQueries(theme).root },
        imageContainer: {
            height: "auto",
            width: "90%",
            margin: "8px",
        },
        contentContainer: {
            padding: "8px",
            maxWidth: "90%",
            display: "flex",
            flexDirection: "column",
        },
        texts: {
            padding: 4,
        },
        skillListItem: {
            padding: "4px 10px",
            width: "auto",
            border: `1px solid ${theme.palette.primary.main}`,
            borderRadius: 4,
            margin: "4px 8px",
        },
        skillList: {
            margin: "16px 0px",
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
            padding: "8px 30px",
            borderRadius: 20,
            margin: "auto",
        },
        downloadIcon: {
            marginLeft: "4px",
        },
        cvDownloadText: {
            fontWeight: "bold",
        },
    });

export default Styles;
