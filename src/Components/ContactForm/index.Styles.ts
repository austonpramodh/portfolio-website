import { createStyles } from "@material-ui/styles";
import { Theme } from "@material-ui/core";

const Styles = (theme: Theme) =>
    createStyles({
        inputField: {
            marginTop: theme.spacing(1),
            marginBottom: theme.spacing(1),
        },
        button: {
            width: "80%",
            borderRadius: "20px",
            marginTop: theme.spacing(1),
            marginBottom: theme.spacing(1),
        },
        messageInputField: {
            height: "100px",
        },
        errorText: {
            marginTop: theme.spacing(1),
            marginBottom: theme.spacing(1),
            height: "1.3rem",
        },
    });

export default Styles;
