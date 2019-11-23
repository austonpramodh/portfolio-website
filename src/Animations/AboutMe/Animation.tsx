import React from "react";
import Lottie from "react-lottie";
import { withStyles, WithStyles } from "@material-ui/styles";
import animationData from "../../Assets/11528-web-site-development.json";
import Styles from "./index.Styles";

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
    },
};

const Animation: React.FC<WithStyles<typeof Styles>> = () => {
    return <Lottie options={defaultOptions} />;
};

export default withStyles(Styles)(Animation);
