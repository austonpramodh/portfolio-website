import { createStyles } from "@mui/styles";
import { Theme } from "@mui/material";

const Styles = (theme: Theme) =>
    createStyles({
        paper: {
            padding: theme.spacing(2),
            marginTop: theme.spacing(2),
            marginBottom: theme.spacing(2),
            boxShadow: "-1rem 0 3rem #000",
            width: "100%",
            height: "100%",
            [theme.breakpoints.up("md")]: {
                width: `calc(100% - ${theme.spacing(2)})`,
                height: `calc(100% - ${theme.spacing(2)})`,
                margin: theme.spacing(1),
            },
        },
    });

export default Styles;
