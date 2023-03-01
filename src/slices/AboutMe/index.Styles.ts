import { createStyles } from "@mui/styles";
import { Theme } from "@mui/material";
// import MainContainerMediaQueries from "../../Constants/MainContainerMediaQueries";

const Styles = (theme: Theme) =>
    createStyles({
        texts: {
            padding: 4,
        },
        skillListItem: {
            padding: `${theme.spacing(0.5)} ${theme.spacing(1)}`,
            width: "auto",
            border: `1px solid ${theme.palette.primary.main}`,
            borderRadius: theme.spacing(0.5),
            margin: `${theme.spacing(0.5)} ${theme.spacing(1)}`,
        },
        skillList: {
            margin: `${theme.spacing(2)} 0px`,
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
            padding: `${theme.spacing(1)} ${theme.spacing(4)}`,
            borderRadius: 20,
            margin: "auto",
        },
        downloadIcon: {
            marginLeft: theme.spacing(0.5),
        },
        cvDownloadText: {
            fontWeight: "bold",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        },
    });

export default Styles;
