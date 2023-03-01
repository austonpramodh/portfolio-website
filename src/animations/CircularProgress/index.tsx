import React from "react";
import { CircularProgress, CircularProgressProps } from "@mui/material";
import VisibilitySensor from "react-visibility-sensor";

const AnimatedCirculatProgress: React.FunctionComponent<CircularProgressProps> = ({ value, ...restProps }) => {
    const [currentValue, setCurrentValue] = React.useState<number>(0);

    const animateCircularProgress = () => {
        setTimeout(() => {
            setCurrentValue(100);
            setTimeout(() => setCurrentValue(value || 0), 300);
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
            <CircularProgress {...restProps} value={currentValue} />
        </VisibilitySensor>
    );
};

export default AnimatedCirculatProgress;
