import React from "react";
import { withStyles, WithStyles } from "@mui/styles";
import VisibilitySensor from "react-visibility-sensor";
import Styles from "./index.Styles";
import LottieReact from "../../components/ReactLottie";

const onVisibilityChange = (setVisibility: React.Dispatch<React.SetStateAction<boolean>>, isVisible: boolean) => {
    setVisibility(isVisible);
};

interface AnimationProps {
    animationData: any;
}

const Animation: React.FC<AnimationProps & WithStyles<typeof Styles>> = ({ animationData }) => {
    const [isVisibleState, setVisibility] = React.useState(false);

    return (
        <VisibilitySensor
            partialVisibility
            minTopValue={100}
            onChange={(isVisible: boolean) => onVisibilityChange(setVisibility, isVisible)}
        >
            <LottieReact isStopped={!isVisibleState} animationData={animationData} />
        </VisibilitySensor>
    );
};

export default withStyles(Styles)(Animation);
