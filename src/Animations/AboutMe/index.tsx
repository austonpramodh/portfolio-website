import React from "react";
import { CircularProgress, Typography } from "@material-ui/core";
import { withStyles, WithStyles } from "@material-ui/styles";
import Styles from "./index.Styles";
import Animation from "./Animation";

const AnimationLoading = (
    <div>
        <CircularProgress />
        <Typography>
            Animations are Beutiful..
            <br />
            So wait for them to Load.
        </Typography>
    </div>
);

const AboutMeAnimation: React.FC<WithStyles<typeof Styles>> = () => {
    const [isPageLoaded, setPageLoaded] = React.useState(false);

    React.useLayoutEffect(() => {
        setPageLoaded(true);
    }, []);

    if (isPageLoaded) return <Animation />;

    return AnimationLoading;
};

export default withStyles(Styles)(AboutMeAnimation);
