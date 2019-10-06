import { createStyles } from "@material-ui/styles";
import { Theme } from "@material-ui/core";

const Styles = (theme: Theme) =>
    createStyles({
        paper: {
            padding: theme.spacing(2),
            marginTop: theme.spacing(1),
            marginBottom: theme.spacing(1),
            boxShadow: "-1rem 0 3rem #000",
            width: "100%",
            [theme.breakpoints.up("md")]: {
                margin: `${theme.spacing(1)}px`,
                width: `${(theme.breakpoints.values.md - 40 - theme.spacing(2 * 3)) / 3}px`,
                // screenwidth - safeArea Padding - (themeSpacingX2(left and right margin of paper * 3 papers ))/3(no of papers wanted)
            },
        },
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
                height: "0.75rem",
                width: "0.75rem",
                color: "transparent",
                backgroundColor: "white",
                borderRadius: "50%",
                marginRight: theme.spacing(1),
            },
        },
    });

export default Styles;
