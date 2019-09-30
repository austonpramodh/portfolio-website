import { createStyles } from "@material-ui/styles";
import { Theme } from "@material-ui/core";

const Styles = (theme: Theme) =>
    createStyles({
        container: {
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            [`@media (min-width: ${700}px)`]: {
                // flexDirection: "row-reverse",
            },
        },
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
        skillSpan: {},
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
