import React from "react";
import { SliceComponentProps } from "@prismicio/react";
import type { Content } from "@prismicio/client";
import {
  Avatar,
  Box,
  Container,
  Link,
  List,
  ListItem,
  Typography,
} from "@mui/material";
// import SliceContainer from "../../components/SliceContainer";
import { PrismicNextImage } from "@prismicio/next";
import * as prismicH from "@prismicio/helpers";
import ContactLinks from "../../components/ContactLinks";
import { useStaticDataContext } from "../../components/StaticDataContext";
import SliceContainer from "../../components/SliceContainer";
import ImageLoader from "../../components/ImageLoader";
import { makeStyles } from "tss-react/mui";
// --- Styles ---
const useStyles = makeStyles()((theme) => {
  console.log("Theme", theme.palette.background.default);
  return {
    test: {
      // background: "yellow",
    },
  };
});
// --- Styles ---

type HeroV1Props = SliceComponentProps<
  Content.HeroV1Slice,
  {
    test: boolean;
  }
>;

const HeroV1: React.FunctionComponent<HeroV1Props> = ({ slice, context }) => {
  console.log("Context", context);
  const staticData = useStaticDataContext();
  const { classes } = useStyles();

  return (
    <SliceContainer id={slice.primary.section_id || slice.id}>
      <Container
        maxWidth="lg"
        sx={(theme) => {
          const pageOffset = `${theme.spacing(18)}`;
          return {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            [theme.breakpoints.between("xs", "xs")]: {
              marginTop: `${theme.spacing(4)} !important`,
            },
            [theme.breakpoints.up("sm")]: {
              marginTop: `${theme.spacing(16)} !important`,
              minHeight: `calc(100vh - ${theme.spacing(16)} - ${pageOffset})`,
            },
            [theme.breakpoints.up("md")]: {
              flexDirection: "row-reverse",
            },
          };
        }}
      >
        {/* --------- */}
        <Box
          className={classes.test}
          sx={(theme) => ({
            border: "20px solid rgba(0, 0, 0, 0.9)",
            borderRadius: "50%",
            margin: "8px",
            [theme.breakpoints.up("md")]: {
              marginLeft: "6rem",
            },
          })}
        >
          <Avatar
            sx={() => ({
              minHeight: 240,
              minWidth: 240,
              border: "20px solid rgba(0, 0, 0, 0.4)",
              background: "transparent",
              "& > div": {
                //avatar image
                height: "100%",
                width: "100%",
              },
              // Next.js Image component
              position: "relative",
              "& > img": {
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center",
              },
            })}
          >
            <PrismicNextImage field={slice.primary.display_picture} alt="" />
          </Avatar>
        </Box>
        <Box
          sx={() => ({
            marginX: "8px",
          })}
        >
          <Typography
            color="textPrimary"
            variant="body1"
            fontWeight="bold"
            width="100%"
            letterSpacing="1px"
            margin="8px"
            padding="10px 10px"
            sx={(theme) => ({
              backgroundColor: theme.palette.primary.main,
              borderTopRightRadius: 20,
              borderTopLeftRadius: 20,
              borderBottomRightRadius: 20,
              borderBottomLeftRadius: 0,
            })}
          >
            {"Hello I'm"}
          </Typography>
          <Typography
            color="textPrimary"
            variant="h2"
            fontWeight="bold"
            sx={() => ({})}
          >
            {slice.primary.name}
          </Typography>
          <Typography color="textSecondary" variant="h4">
            {slice.primary.designation}
          </Typography>
          <List>
            {slice.items.map(({ icon, link, label }) => {
              // const svgPath = icon.localFile.relativePath;
              const parsedLink = prismicH.asLink(link);
              return (
                <ListItem
                  key={`${link?.link_type}-${label}`}
                  // className={link.url ? classes.listItem : ""}
                  sx={(theme) => ({
                    borderRadius: 20,
                    transition: "all 0.3s ease-in",
                    cursor: "pointer",
                    "&:hover": {
                      backgroundColor: theme.palette.primary.main,
                      color: theme.palette.background.default,
                    },
                  })}
                >
                  <Link
                    href={parsedLink || undefined}
                    sx={{
                      justifyContent: "center",
                      alignItems: "center",
                      display: "flex",
                      textDecoration: "none",
                    }}
                  >
                    <Box
                      sx={() => ({
                        width: 24,
                        height: 24,
                        marginRight: 1,
                        // Next.js Image component
                        "& > img": {
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          objectPosition: "center",
                        },
                      })}
                    >
                      <ImageLoader
                        field={icon}
                        sx={(theme) => ({
                          svg: {
                            fill: theme.palette.common.white,
                          },
                        })}
                      />
                    </Box>

                    <Typography color="textPrimary" variant="body1">
                      {label}
                    </Typography>
                  </Link>
                </ListItem>
              );
            })}
          </List>
          {staticData.externalLinksData && (
            <ContactLinks
              linksData={staticData.externalLinksData.external_link.map(
                (link) => ({
                  link: prismicH.asLink(link.link) ?? "",
                  name: link.label ?? "",
                  icon: link.icon,
                })
              )}
            />
          )}
        </Box>
        {/* --------- */}
      </Container>
    </SliceContainer>
  );
};

export default HeroV1;
