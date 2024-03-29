import Styles from "./index.Styles";
import React from "react";
import { withStyles, WithStyles } from "@mui/styles";
import { Box, Container, Typography, useTheme } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";

import AboutMeAnimation from "../../animations/AboutMe";
import { SliceComponentProps } from "@prismicio/react";
import { Content } from "@prismicio/client";
import SliceContainer from "../../components/SliceContainer";
import * as prismicH from "@prismicio/helpers";

type Props = SliceComponentProps<Content.AboutMeSlice>;

const AboutMe: React.FC<WithStyles<typeof Styles> & Props> = ({ classes, slice, index, slices }) => {
    return (
        <SliceContainer id={slice.primary.section_id || slice.id}>
            <Container
                maxWidth="lg"
                sx={[
                    (theme) => {
                        return {
                            // Testing
                            display: "grid",
                            gridTemplateColumns: "1fr",
                            [theme.breakpoints.up("md")]: {
                                flexDirection: "row",
                                gridTemplateColumns: "1fr 1fr",
                            },
                            // Check if this is second slice, if it is then have my else only mb
                            mb: index + 1 === slices.length ? theme.spacing(2) : theme.spacing(8),
                            mt: index === 1 ? theme.spacing(8) : theme.spacing(16),
                        };
                    },
                ]}
            >
                <Box>
                    {/* TODO: add image support */}
                    <AboutMeAnimation
                        animationDataUrl={
                            "https://auston.cdn.prismic.io/auston/e6df8187-3e79-4726-85c8-1473b93863f7_web-site-development-lottie.json"
                        }
                    />
                </Box>

                <Box
                    sx={() => ({
                        my: "auto",
                        display: "flex",
                        flexDirection: "column",
                    })}
                >
                    <Typography color="textPrimary" className={classes.texts} variant="h6">
                        {prismicH.asText(slice.primary.title)}
                    </Typography>
                    <Typography color="textPrimary" className={classes.texts}>
                        {prismicH.asText(slice.primary.description)}
                    </Typography>
                    <ul className={classes.skillList}>
                        {slice.items.map(({ keyword }) => (
                            <li key={keyword} className={classes.skillListItem}>
                                <Typography component="span" color="textPrimary" variant="caption">
                                    {keyword}
                                </Typography>
                            </li>
                        ))}
                    </ul>
                    <a
                        href={"/resume"}
                        className={classes.cvDownloadButton}
                        style={{
                            textDecoration: "none",
                        }}
                    >
                        <Typography color="textPrimary" className={classes.cvDownloadText}>
                            Download CV
                            <DownloadIcon className={classes.downloadIcon} />
                        </Typography>
                    </a>
                </Box>
            </Container>
        </SliceContainer>
    );
};

export default withStyles(Styles)(AboutMe);
