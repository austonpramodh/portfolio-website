import React from "react";
import { CircularProgress, Typography } from "@material-ui/core";
import { withStyles, WithStyles } from "@material-ui/styles";
import Styles from "./index.Styles";

const Animation = React.lazy(() => import("./Animation"));

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
    return (
        <React.Suspense fallback={AnimationLoading}>
            <Animation />
        </React.Suspense>
    );
};

export default withStyles(Styles)(AboutMeAnimation);
