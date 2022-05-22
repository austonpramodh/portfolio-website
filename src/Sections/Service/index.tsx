import React from "react";
import { withStyles, WithStyles } from "@material-ui/styles";
import { Typography } from "@material-ui/core";
import MahaCards from "../../Components/MahaCards";
import Styles from "./index.Styles";
import StaticWhatIDoData from "../../Utils/StaticDataHooks/WhatIDo";

const Service: React.FC<WithStyles<typeof Styles>> = ({ classes }) => {
    const data = StaticWhatIDoData();
    const mutatedData = data.what_i_do_items.map((eachData) => {
        return {
            name: eachData.header,
            description: eachData.description,
            IconPath: eachData.image.url,
        };
    });
    const renderCards = (cardsData: { name: string; description: string; IconPath: string }[]) => {
        const chunkSize = 2;
        const myArray = cardsData;
        const arrayLength = myArray.length;
        const tempArray: React.ReactNode[] = [];

        for (let index = 0; index < arrayLength; index += chunkSize) {
            const myChunk = myArray.slice(index, index + chunkSize);
            // Do something if you want with the group
            tempArray.push(
                <div>
                    <MahaCards
                        classes={{ icon: classes.icon }}
                        paperClass={classes.paper}
                        keyHeader="services"
                        Cards={myChunk}
                    />
                </div>,
            );
        }

        return tempArray;
    };
    // renderCards([mutatedData[0], mutatedData[0], mutatedData[1]]);
    return (
        <div className={`${classes.container} ${classes.containerMediaQueries}`}>
            <Typography className={classes.header} variant="h2">
                {data.what_i_do_header}
            </Typography>
            <div className={classes.servicesContainer}>{renderCards(mutatedData)}</div>
        </div>
    );
};

export default withStyles(Styles)(Service);
