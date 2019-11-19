import { createStyles } from "@material-ui/styles";
import Theme from "../../Theme";

const iconSize = 64;
const Styles = createStyles({
    container: {
        position: "fixed",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        background: Theme.palette.background.default,
    },
    hourglassContainer: {
        display: "inline-block",
        position: "absolute",
        width: `${iconSize}px`,
        height: `${iconSize}px`,
        top: "50%",
        left: "50%",
        marginTop: `-${iconSize / 2}px`,
        marginLeft: `-${iconSize / 2}px`,
    },
    hourglass: {
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
