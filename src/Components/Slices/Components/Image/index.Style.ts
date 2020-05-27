import { createStyles } from "@material-ui/styles";
import { Theme } from "@material-ui/core";

const Styles = (theme: Theme) =>
    createStyles({
        container: {
            display: "flex",
            flexDirection: "column",
        },
        imageContainer: {
            textAlign: "center",
            padding: theme.spacing(2),
            marginTop: theme.spacing(1),
            marginBottom: theme.spacing(1),
        },
    });

export default Styles;
