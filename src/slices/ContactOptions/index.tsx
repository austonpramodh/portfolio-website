import React from "react";
import { SliceComponentProps } from "@prismicio/react";
import { Content } from "@prismicio/client";
import { Container, Link, Typography } from "@mui/material";
import SliceContainer from "../../components/SliceContainer";
import { withStyles, WithStyles } from "@mui/styles";
import Styles from "./index.Styles";
import MahaPaper from "../../components/MahaPaper";
import * as prismicH from "@prismicio/helpers";
import ImageLoader from "../../components/ImageLoader";
import ContactLinks from "../../components/ContactLinks";
import { useStaticDataContext } from "../../components/StaticDataContext";
import ContactForm from "../../components/ContactForm";
import NextImage from "next/image";

type Props = SliceComponentProps<Content.ContactOptionsSlice>;

const ContactOptions: React.FunctionComponent<
  Props & WithStyles<typeof Styles>
> = ({ slice, classes, index, slices }) => {
  const [domain, setDomain] = React.useState("");
  React.useLayoutEffect(() => {
    setDomain(document.domain);
  }, []);

  const staticData = useStaticDataContext();

  return (
    <SliceContainer id={slice.primary.section_id || slice.id}>
      <Container
        maxWidth="xl"
        sx={(theme) => {
          return {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            // Check if this is second slice, if it is then have my else only mb
            mb:
              index + 1 === slices.length ? theme.spacing(2) : theme.spacing(8),
            mt: index === 1 ? theme.spacing(8) : theme.spacing(16),
          };
        }}
      >
        <Typography variant="h2" className={classes.header}>
          Contact Me
        </Typography>
        <div className={classes.contactCardsContainer}>
          {slice.items.map((eachItem, key) => (
            <MahaPaper
              key={`${key}Contact`}
              // className={classes.paper}
              overrideDefaultPaperClasses
              sx={(theme) => ({
                [theme.breakpoints.up("md")]: {
                  margin: `${theme.spacing(1)}`,
                  width: `${
                    (theme.breakpoints.values.md -
                      40 -
                      Number(theme.spacing(2 * 3).split("px")[0])) /
                    3
                  }px`,
                  my: 0,
                },
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                py: 2,
                my: 1,
              })}
            >
              <>
                <div className={classes.iconContainer}>
                  <ImageLoader
                    field={eachItem.icon}
                    className={classes.icon}
                    sx={(theme) => ({
                      padding: theme.spacing(2),
                      "& svg": {
                        fill: "white",
                      },
                      "& > img": {
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "center",
                      },
                    })}
                  />
                </div>
                <Typography className={classes.cardHeading} variant="h5">
                  {prismicH.asText(eachItem.title)}
                </Typography>
                <Link
                  href={prismicH.asLink(eachItem.link) || ""}
                  sx={{
                    textDecoration: "none",
                  }}
                >
                  <Typography className={classes.content} variant="body2">
                    {prismicH.asText(eachItem.description)}
                  </Typography>
                </Link>
              </>
            </MahaPaper>
          ))}
        </div>
        <Typography className={classes.contactFormHeading} variant="h2">
          Lets Connect!
        </Typography>
        <Container maxWidth="sm">
          <ContactForm />
        </Container>

        <div className={classes.footer}>
          <Typography className={classes.footerText}>
            Made with love by Auston Pramodh Barboza @ 2022
          </Typography>

          {staticData.externalLinksData && (
            <div className={classes.footerLinksContainer}>
              <ContactLinks
                linksData={staticData.externalLinksData.external_link.map(
                  (link) => ({
                    link: prismicH.asLink(link.link) ?? "",
                    name: link.label ?? "",
                    icon: link.icon,
                  })
                )}
              />
            </div>
          )}
          <a href={`https://ipv6-test.com/validate.php?url=${domain}`}>
            {/* TODO: fix me */}
            <NextImage
              src="https://ipv6-test.com/button-ipv6-big.png"
              alt="ipv6 ready"
              title="ipv6 ready"
              // interensic height, 2:1 ratio
              width={100}
              height={50}
            />
          </a>
        </div>
      </Container>
    </SliceContainer>
  );
};

export default withStyles(Styles)(ContactOptions);
