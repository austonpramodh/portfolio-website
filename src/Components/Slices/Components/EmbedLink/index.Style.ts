import { createStyles } from "@material-ui/styles";
import { Theme } from "@material-ui/core";

const Styles = (theme: Theme) =>
    createStyles({
        github: {
            [theme.breakpoints.up("md")]: {
                width: "130%",
                marginLeft: "-15%",
            },
        },
    });

export default Styles;
