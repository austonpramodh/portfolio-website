import React from "react";
import { withStyles, WithStyles } from "@material-ui/styles";
import { Typography } from "@material-ui/core";
import MahaCards from "../../Components/MahaCards";
import Styles from "./index.Styles";
import StaticWhatIDoData from "../../Utils/StaticDataHooks/WhatIDo";

const Service: React.FC<WithStyles<typeof Styles>> = ({ classes }) => {
    const data = StaticWhatIDoData();
    const mutatedData = data.what_i_do_items.map(eachData => {
        return {
            name: eachData.header,
            description: eachData.description,
            IconPath: eachData.image.localFile.relativePath,
        };
    });
    return (
        <div className={`${classes.container} ${classes.containerMediaQueries}`}>
            <Typography className={classes.header} variant="h2">
                {data.what_i_do_header}
            </Typography>
            <div className={classes.servicesContainer}>
                <MahaCards keyHeader="services" Cards={mutatedData} />
            </div>
        </div>
    );
};

export default withStyles(Styles)(Service);
