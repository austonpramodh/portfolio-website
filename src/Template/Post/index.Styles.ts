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
        postHeader: {
            padding: theme.spacing(2.5),
            maxWidth: 700,
            marginLeft: "auto",
            marginRight: "auto",
        },
        backButtonContainer: {
            marginBottom: theme.spacing(4),
            "&::before": {
                content: `"\\2190"`, //"\\2190",
                display: "inline-block",
                position: "relative",
                marginRight: 8,
            },
            "& a": {
                display: "inline",
                "&:hover": {
                    textDecoration: "underline",
                },
            },
        },
    });
};

export default Styles;
