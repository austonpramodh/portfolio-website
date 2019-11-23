import { createStyles } from "@material-ui/styles";
import Theme from "../../Theme";

const iconContainerSize = 200;
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
        // display: "inline-block",
        position: "absolute",
        width: `${iconContainerSize}px`,
        height: `${iconContainerSize}px`,
        top: "50%",
        left: "50%",
        marginTop: `-${iconContainerSize / 2}px`,
        marginLeft: `-${iconContainerSize / 2}px`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
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
    factText: {
        marginTop: Theme.spacing(1),
        marginBottom: Theme.spacing(1),
        color: Theme.palette.text.primary,
        fontWeight: "bold",
        fontStyle: "italic",
        width: "100%",
    },
    loadingText: {
        marginTop: Theme.spacing(1),
        marginBottom: Theme.spacing(1),
        color: Theme.palette.text.primary,
    },
});

export default Styles;
