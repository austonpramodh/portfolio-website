import React from "react";
import Lottie from "react-lottie";
import { withStyles, WithStyles } from "@material-ui/styles";
import VisibilitySensor from "react-visibility-sensor";
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

const onVisibilityChange = (setVisibility: React.Dispatch<React.SetStateAction<boolean>>, isVisible: boolean) => {
    setVisibility(isVisible);
};

const Animation: React.FC<WithStyles<typeof Styles>> = () => {
    const [isVisibleState, setVisibility] = React.useState(true);
    React.useEffect(() => {
        setTimeout(() => {
            setVisibility(false);
        }, 100);
    }, []);

    return (
        <VisibilitySensor onChange={isVisible => onVisibilityChange(setVisibility, isVisible)}>
            <Lottie
                isClickToPauseDisabled={true}
                options={defaultOptions}
                isStopped={!isVisibleState}
                // isPaused={!isVisibleState}
            />
        </VisibilitySensor>
    );
};

export default withStyles(Styles)(Animation);
