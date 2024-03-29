import React from "react";
import { withStyles, WithStyles } from "@mui/styles";
import { Container, Typography } from "@mui/material";
import MahaCards from "../../components/MahaCards";
import Styles from "./index.Styles";
import { SliceComponentProps } from "@prismicio/react";
import { Content } from "@prismicio/client";
import SliceContainer from "../../components/SliceContainer";
// import StaticWhatIDoData from "../../Utils/StaticDataHooks/WhatIDo";
import * as prismicH from "@prismicio/helpers";
import { PrismicNextImageProps } from "@prismicio/next";

type QuickCardsProps = SliceComponentProps<Content.QuickCardsSlice>;

const QuickCards: React.FC<WithStyles<typeof Styles> & QuickCardsProps> = ({ classes, slice, index, slices }) => {
    const mutatedData = slice.items.map((eachItem) => {
        return {
            name: eachItem.title || "Title missing!",
            description: eachItem.description || "Description missing!",
            // TODO: fix this, this should be image
            IconField: (prismicH.isFilled.image(eachItem.icon) && eachItem.icon) || null,
        };
    });

    const renderCards = (
        cardsData: {
            name: string;
            description: string;
            IconField?: PrismicNextImageProps["field"] | null;
        }[]
    ) => {
        // FIXME: move to flexbox to do this instead of JS
        // This is a hack to accomodate atleast 2 cards in a row
        const chunkSize = 2;
        const myArray = cardsData;
        const arrayLength = myArray.length;
        const tempArray: React.ReactNode[] = [];

        for (let index = 0; index < arrayLength; index += chunkSize) {
            const myChunk = myArray.slice(index, index + chunkSize);
            // Do something if you want with the group
            tempArray.push(
                <div key={`${slice.id}-${chunkSize}-${index}`}>
                    <MahaCards
                        classes={{ icon: classes.icon }}
                        paperClass={classes.paper}
                        keyHeader="services"
                        Cards={myChunk}
                    />
                </div>
            );
        }

        return tempArray;
    };

    return (
        <SliceContainer
            id={slice.primary.section_id || slice.id}
            sx={{
                display: "block",
            }}
        >
            <Container
                maxWidth="xl"
                sx={(theme) => {
                    return {
                        // Testing
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                        textAlign: "left",
                        // Check if this is second slice, if it is then have my else only mb
                        mb: index + 1 === slices.length ? theme.spacing(2) : theme.spacing(8),
                        mt: index === 1 ? theme.spacing(8) : theme.spacing(16),
                    };
                }}
            >
                <Typography className={classes.header} variant="h3">
                    {prismicH.asText(slice.primary.title)}
                </Typography>
                <div className={classes.servicesContainer}>{renderCards(mutatedData)}</div>
            </Container>
        </SliceContainer>
    );
};

export default withStyles(Styles)(QuickCards);
