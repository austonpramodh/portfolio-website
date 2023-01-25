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

type Props = SliceComponentProps<Content.ContactOptionsSlice>;

const ContactOptions: React.FunctionComponent<
  Props & WithStyles<typeof Styles>
> = ({ slice, classes }) => {
  const [domain, setDomain] = React.useState("");
  React.useLayoutEffect(() => {
    setDomain(document.domain);
  }, []);

  const staticData = useStaticDataContext();

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
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            marginBottom: `${theme.spacing(1)} !important`,
          };
        }}
      >
        <Typography variant="h2" className={classes.header}>
          Contact Me
        </Typography>
        <div className={classes.contactCardsContainer}>
          {slice.items.map((eachItem, key) => (
            <MahaPaper key={`${key}Contact`} className={classes.paper}>
              <>
                <div className={classes.iconContainer}>
                  <ImageLoader
                    field={eachItem.icon}
                    className={classes.icon}
                    sx={{
                      "& > img": {
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "center",
                      },
                    }}
                  />
                </div>
                <Typography className={classes.cardHeading} variant="h4">
                  {prismicH.asText(eachItem.title)}
                </Typography>
                <Link
                  href={prismicH.asLink(eachItem.link) || ""}
                  sx={{
                    textDecoration: "none",
                  }}
                >
                  <Typography className={classes.content}>
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
        <ContactForm />
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
            <img
              src="https://ipv6-test.com/button-ipv6-big.png"
              alt="ipv6 ready"
              title="ipv6 ready"
            />
          </a>
        </div>
      </Container>
    </SliceContainer>
  );
};

export default withStyles(Styles)(ContactOptions);
