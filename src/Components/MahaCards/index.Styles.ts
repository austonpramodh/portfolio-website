import { createStyles } from "@material-ui/styles";
import { Theme } from "@material-ui/core";

const Styles = (theme: Theme) =>
    createStyles({
        icon: {
            height: 30,
            width: 30,
            marginTop: theme.spacing(2),
            marginBottom: theme.spacing(2.5),
        },
        subHeader: {
            display: "flex",
            marginBottom: theme.spacing(1),
            fontWeight: "bold",
            textAlign: "initial",
        },
        description: {
            textAlign: "left",
            marginBottom: "1rem",
        },
        header: {
            textAlign: "left",
        },
        headersSection: {
            display: "flex",
            marginBottom: theme.spacing(2),
        },
        highlightedHeader: {
            color: theme.palette.primary.main,
        },
        listHeader: {
            fontWeight: "bold",
            textAlign: "left",
            fontSize: "0.85rem",
        },
        list: {
            textAlign: "left",
            marginTop: 0,
        },
        listItem: {
            display: "flex",
            alignItems: "center",
            "&::before": {
                fontSize: 1,
                content: `"a"`,
                minHeight: "0.75rem",
                minWidth: "0.75rem",
                color: "transparent",
                backgroundColor: "white",
                borderRadius: "50%",
                marginRight: theme.spacing(1),
            },
            "& span": {
                textAlign: "left",
            },
        },
    });

export default Styles;
