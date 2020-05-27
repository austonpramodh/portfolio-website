import { createStyles } from "@material-ui/styles";
import { Theme } from "@material-ui/core";

const Styles = (theme: Theme) => {
    return createStyles({
        container: {
            cursor: "pointer",
            zIndex: theme.zIndex.appBar + 100,
            position: "fixed",
            right: theme.spacing(2),
            top: theme.spacing(2),
            borderRadius: "50%",
            background: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: 8,
            height: 24 + 16,
            width: 24 + 16,
            fill: "#503660",
            border: "2px solid",
            borderColor: "white",
            transition: "transform 0.3s ease-in-out,border-color 0.3s ease-in-out, fill 0.3s ease-in-out",
            "&:hover": {
                transform: "scale(1.2)",
                borderColor: "#418cec",
                fill: "#418cec",
            },
            [theme.breakpoints.up("sm")]: {
                top: theme.spacing(1.5),
                zIndex: theme.zIndex.appBar + 250,
            },
        },
        icon: {
            height: 24,
            width: 24,
            position: "absolute",
            transition: "opacity 0.3s ease-in-out",
        },
        iconInactive: {
            opacity: 0,
        },
    });
};

export default Styles;
