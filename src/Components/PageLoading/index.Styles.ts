import { createStyles } from "@material-ui/styles";
import Theme from "../../Theme";

const Styles = createStyles({
    container: {
        background: Theme.palette.background.default,
        height: "100vh",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    hourglassContainer: {
        display: "inline-block",
        position: "relative",
        width: "64px",
        height: "64px",
    },
    hourglass: {
        // content: " ",
        display: "block",
        borderRadius: "50%",
        width: 0,
        height: 0,
        margin: 6,
        boxSizing: "border-box",
        border: `26px solid ${Theme.palette.background.default}`,
        borderColor: `${Theme.palette.primary.main} transparent ${Theme.palette.primary.main} transparent`,
        animationName: "hourglass-animation",
        animationDuration: "1s",
        animationTimingFunction: "linear",
        animationIterationCount: "infinite",
    },
});

export default Styles;
