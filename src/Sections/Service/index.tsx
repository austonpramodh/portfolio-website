import React from "react";
import { withStyles, WithStyles } from "@material-ui/styles";
import { Typography, Paper } from "@material-ui/core";
import { ServicesSection } from "../../Constants/Content";
import Styles from "./index.Styles";

const Service: React.FC<WithStyles<typeof Styles>> = ({ classes }) => {
    return (
        <div className={`${classes.container} ${classes.containerMediaQueries}`}>
            <Typography className={classes.header} variant="h2">
                What i do
            </Typography>
            <div className={classes.servicesContainer}>
                {ServicesSection.map(({ Icon, name, description, IconColor }, index) => (
                    <Paper key={`service${index}`} className={classes.paper}>
                        <Icon className={classes.icon} style={{ color: IconColor }} />
                        <Typography className={classes.subHeader} variant="h3">
                            {name}
                        </Typography>
                        <Typography className={classes.description}>{description}</Typography>
                    </Paper>
                ))}
            </div>
        </div>
    );
};

export default withStyles(Styles)(Service);
