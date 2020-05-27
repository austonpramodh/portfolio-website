import { createStyles } from "@material-ui/styles";
// import { Theme } from "@material-ui/core";

const Styles = () =>
    createStyles({
        container: {
            display: "flex",
            justifyContent: "center",
            position: "relative",
            alignItems: "center",
        },
        loader: {
            position: "absolute",
        },
        iframe: {
            transition: "opacity 0.3s ease-in",
        },
        iframeInvisible: {
            visibility: "hidden",
            opacity: 0,
        },
    });

export default Styles;
