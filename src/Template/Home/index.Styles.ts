import { createStyles } from "@material-ui/styles";
import { Theme } from "@material-ui/core";

const Styles = (theme: Theme) => {
    return createStyles({
        container: {
            maxWidth: 700,
            margin: "auto",
        },
        "@global": {
            body: {
                paddingTop: theme.spacing(6),
            },
        },
        post: {
            marginBottom: theme.spacing(6),
        },
        profile: {
            textAlign: "center",
            borderBottom: "1px solid #dadada",
            marginBottom: theme.spacing(6),
        },
        avatar: {
            height: 140,
            width: 140,
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: theme.spacing(2.5),
            marginBottom: theme.spacing(2.5),
        },
        role: {
            fontSize: "18px",
            color: "#9a9a9a",
            lineHeight: "30px",
            // paddingBottom: theme.spacing(6),
        },
        backButtonContainer: {
            marginBottom: theme.spacing(4),
            "&::before": {
                content: `"\\2190"`, //"\\2190",
                display: "inline-block",
                position: "relative",
                marginRight: 8,
            },
        },
    });
};

export default Styles;
