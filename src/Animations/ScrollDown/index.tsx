import React from "react";
import { CircularProgress } from "@material-ui/core";
import { withStyles, WithStyles } from "@material-ui/styles";
import Styles from "./index.Styles";

const Animation = React.lazy(() => import("./Animation"));

const AnimationLoading = (
    <div>
        <CircularProgress />
    </div>
);

const ScrollDownAnimation: React.FC<WithStyles<typeof Styles>> = () => {
    return (
        <React.Suspense fallback={AnimationLoading}>
            <Animation />
        </React.Suspense>
    );
};

export default withStyles(Styles)(ScrollDownAnimation);
