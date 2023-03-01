import React from "react";
import { LinearProgress, LinearProgressProps } from "@mui/material";
import VisibilitySensor from "react-visibility-sensor";

const AnimatedProgressBar: React.FunctionComponent<LinearProgressProps> = ({
    value,
    variant = "determinate",
    ...restProps
}) => {
    const [currentValue, setCurrentValue] = React.useState<number>(0);

    const animateCircularProgress = () => {
        setTimeout(() => {
            setCurrentValue(100);
            setTimeout(() => setCurrentValue(value || 0), 400);
        }, 200);
    };

    const onVisibilityChange = (visibility: boolean) => {
        if (visibility) {
            animateCircularProgress();
        } else {
            setCurrentValue(0);
        }
    };

    return (
        <VisibilitySensor onChange={onVisibilityChange}>
            <LinearProgress variant={variant} value={currentValue} {...restProps} />
        </VisibilitySensor>
    );
};

export default AnimatedProgressBar;
