import { createStyles } from "@material-ui/styles";
import { Theme } from "@material-ui/core";

const Styles = (theme: Theme) =>
    createStyles({
        container: {
            textAlign: "center",
            marginBottom: theme.spacing(4),
        },
        image: {
            textAlign: "center",
            padding: theme.spacing(2),
            marginTop: theme.spacing(1),
            marginBottom: theme.spacing(1),
            [theme.breakpoints.up("md")]: {
                width: "130%",
                marginLeft: "-15%",
            },
        },
    });

export default Styles;
