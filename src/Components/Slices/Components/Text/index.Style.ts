import { createStyles } from "@material-ui/styles";
import { Theme } from "@material-ui/core";

const Styles = (theme: Theme) =>
    createStyles({
        container: {
            marginBottom: theme.spacing(4),
        },
    });

export default Styles;
