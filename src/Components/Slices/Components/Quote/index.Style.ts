import { createStyles } from "@material-ui/styles";
import { Theme } from "@material-ui/core";

const Styles = (theme: Theme) =>
    createStyles({
        container: {
            marginBottom: theme.spacing(4),
            "&::before": {
                content: `"\\AB  "`,
            },
            "&::after": {
                content: `"  \\BB"`,
            },
            fontSize: "24px",
            color: "#868686",
            fontStyle: "italic",
            [theme.breakpoints.up("md")]: {
                width: "130%",
                marginLeft: "-15%",
                fontSize: "30px",
            },
        },
    });

export default Styles;
