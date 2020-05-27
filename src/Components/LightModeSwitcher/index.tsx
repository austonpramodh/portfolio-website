import React from "react";
import { WithStyles, withStyles } from "@material-ui/styles";

import Styles from "./index.Styles";

const ModeLightIcon: React.SFC<IconProps> = ({ className = "" }) => (
    <svg className={className} aria-hidden="true" focusable="false" viewBox="0 0 960 960">
        <g className="mode-light">
            <circle cx="479.5" cy="480.5" r="242"></circle>
            <path d="M480 800c22 0 40 18 40 40v80a40 40 0 01-80 0v-80c0-22 18-40 40-40zm480-320c0 22-18 40-40 40h-80a40 40 0 010-80h80c22 0 40 18 40 40zM706 763l57 56a40 40 0 1056-56l-56-57a40 40 0 10-57 57zm-509 56l57-56a40 40 0 10-57-57l-56 57a40 40 0 1056 56zm-77-379a40 40 0 010 80H40a40 40 0 010-80h80zm21-243l56 57a40 40 0 1057-57l-57-56a40 40 0 10-56 56zm622 57l56-57a40 40 0 10-56-56l-57 56a40 40 0 1057 57zM440 40v80a40 40 0 0080 0V40a40 40 0 00-80 0z"></path>
        </g>
    </svg>
);

interface IconProps {
    className?: string;
}
const ModeDarkIcon: React.SFC<IconProps> = ({ className = "" }) => (
    <svg className={className} aria-hidden="true" focusable="false" viewBox="0 0 960 960">
        <g className="mode-dark">
            <circle cx="476" cy="480" r="458" fillOpacity=".25"></circle>
            <path d="M382 33C82 91-118 488 115 767c186 223 492 255 716 9a515 515 0 01-421-243c-94-157-56-368-28-500z"></path>
        </g>
    </svg>
);

interface LightModeSwitcherProps {
    className?: string;
    isDarkMode: boolean;
    onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const LightModeSwitcher: React.SFC<LightModeSwitcherProps & WithStyles<typeof Styles>> = ({
    classes,
    className = "",
    isDarkMode,
    onClick,
}) => {
    // const [isDarkMode, setDarkMode] = React.useState(false);

    return (
        <div className={`${classes.container} ${className}`} onClick={onClick}>
            <ModeLightIcon className={`${classes.icon} ${isDarkMode ? "" : classes.iconInactive}`} />
            <ModeDarkIcon className={`${classes.icon} ${isDarkMode ? classes.iconInactive : ""}`} />
        </div>
    );
};

export default withStyles(Styles)(LightModeSwitcher);
