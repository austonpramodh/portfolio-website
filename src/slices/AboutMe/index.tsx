import Styles from "./index.Styles";
import React from "react";
import { withStyles, WithStyles } from "@mui/styles";
import { Box, Container, Typography } from "@mui/material";
import { Download as DownloadIcon } from "@mui/icons-material";

import AboutMeAnimation from "../../animations/AboutMe";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { Content } from "@prismicio/client";
import SliceContainer from "../../components/SliceContainer";
import * as prismicH from "@prismicio/helpers";

type Props = SliceComponentProps<Content.AboutMeSlice>;

const AboutMe: React.FC<WithStyles<typeof Styles> & Props> = ({
  classes,
  slice,
}) => {
  return (
    <SliceContainer
      id={slice.primary.section_id || slice.id}
      name={slice.primary.section_id || slice.id!}
    >
      <Container
        maxWidth="md"
        sx={(theme) => {
          return {
            minHeight: "100vh",
            // Testing
            display: "grid",
            gridTemplateColumns: "1fr",
            [theme.breakpoints.up("md")]: {
              flexDirection: "row",
              gridTemplateColumns: "1fr 1fr",
            },
          };
        }}
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
          <Typography
            color="textPrimary"
            className={classes.texts}
            variant="h6"
          >
            <PrismicRichText field={slice.primary.title} />
          </Typography>
          <Typography color="textPrimary" className={classes.texts}>
            <PrismicRichText field={slice.primary.description} />
          </Typography>
          <ul className={classes.skillList}>
            {slice.items.map(({ keyword }) => (
              <li key={keyword} className={classes.skillListItem}>
                <Typography
                  component="span"
                  color="textPrimary"
                  variant="caption"
                >
                  {keyword}
                </Typography>
              </li>
            ))}
          </ul>
          <a
            href={prismicH.asLink(slice.primary.resume) || ""}
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
