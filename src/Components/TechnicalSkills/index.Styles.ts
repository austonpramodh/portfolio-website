import { createStyles } from "@material-ui/styles";
import { Theme } from "@material-ui/core";

const Styles = (theme: Theme) =>
    createStyles({
        eachSkills: {
            width: "100%",
            marginTop: theme.spacing(3),
            paddingRight: 16,
            paddingLeft: 16,
        },
        skill: {
            marginBottom: theme.spacing(2),
        },
        info: {
            flexGrow: 1,
            display: "flex",
        },
        percentage: {
            marginLeft: "auto",
            marginRight: 8,
        },
        progressBar: {
            backgroundColor: "rgba(199, 198, 198, 0.6)",
            borderRadius: 10,
            marginTop: theme.spacing(0.5),
            height: theme.spacing(1),
        },
    });

export default Styles;
