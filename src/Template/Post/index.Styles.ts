import { createStyles } from "@material-ui/styles";
import { Theme } from "@material-ui/core";

const Styles = (theme: Theme) =>
    createStyles({
        container: {},
        postHeader: {
            padding: theme.spacing(2),
            maxWidth: 700,
            marginLeft: "auto",
            marginRight: "auto",
        },
    });

export default Styles;
