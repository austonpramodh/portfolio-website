import React from "react";
import { withStyles, WithStyles } from "@material-ui/styles";
import { Typography } from "@material-ui/core";
import { ServicesSection } from "../../Constants/Content";
import MahaCards from "../../Components/MahaCards";
import Styles from "./index.Styles";

const Service: React.FC<WithStyles<typeof Styles>> = ({ classes }) => {
    return (
        <div className={`${classes.container} ${classes.containerMediaQueries}`}>
            <Typography className={classes.header} variant="h2">
                What i do
            </Typography>
            <div className={classes.servicesContainer}>
                <MahaCards keyHeader="services" Cards={ServicesSection} />
            </div>
        </div>
    );
};

export default withStyles(Styles)(Service);
