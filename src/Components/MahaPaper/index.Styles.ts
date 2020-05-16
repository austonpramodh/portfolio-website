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
            height: "100%",
            [theme.breakpoints.up("md")]: {
                width: `calc(100% - ${theme.spacing(2)}px)`,
                height: `calc(100% - ${theme.spacing(2)}px)`,
                margin: theme.spacing(1),
            },
        },
    });

export default Styles;
