import React from "react";
import { withStyles, WithStyles } from "@material-ui/styles";
import Styles from "./index.Styles";
import { StarSpaceAnimation } from "../../Animations/StarsSpace";

const CanvasBackground: React.SFC<WithStyles<typeof Styles>> = ({ classes }) => {
    const [state, setState] = React.useState({ canvasHeight: 600, canvasWidth: 600, disableMovingStars: false });

    const onWindowResize = () => {
        let disableMovingStars = false;
        if (window.innerWidth < 600) disableMovingStars = true;
        setState({ canvasHeight: window.innerHeight, canvasWidth: window.innerWidth, disableMovingStars });
    };

    React.useEffect(() => {
        window.addEventListener("resize", onWindowResize);
        onWindowResize();
        return () => window.removeEventListener("resize", onWindowResize);
    }, []);

    return (
        <div className={classes.container}>
            <StarSpaceAnimation height={state.canvasHeight - 4} width={state.canvasWidth - 16} />
        </div>
    );
};

export default withStyles(Styles)(CanvasBackground);
