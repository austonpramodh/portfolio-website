import { createStyles } from "@material-ui/styles";
import { Theme } from "@material-ui/core";

const Styles = (theme: Theme) =>
    createStyles({
        container: {
            padding: `${theme.spacing(4)}px 0px`,
            borderTop: "1px solid #dadada",
            textAlign: "center",
            "& a": {
                display: "inline",
            },
        },
    });

export default Styles;
