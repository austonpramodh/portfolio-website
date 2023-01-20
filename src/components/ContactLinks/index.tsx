import React, { Fragment } from "react";
import { Link, List, ListItem } from "@mui/material";
import { PrismicImageProps } from "@prismicio/react";
import ImageLoader from "../ImageLoader";

type Props = {
  linksData: {
    link: string;
    name: string;
    icon: PrismicImageProps["field"] | null;
  }[];
};

const ContactLinks: React.FunctionComponent<Props> = ({ linksData }) => {
  return (
    <Fragment>
      <List
        sx={() => ({
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        })}
      >
        {linksData.map(({ icon, link, name }) => {
          return (
            <ListItem
              key={`${name}-${link}`}
              sx={() => ({
                width: "unset",
              })}
            >
              <Link title={name} href={link}>
                <ImageLoader
                  field={icon}
                  sx={(theme) => ({
                    fill: theme.palette.common.white,
                    width: 24,
                    height: 24,
                    // Next.js Image component
                    // TODO: image hover styles need to be implemented
                    "& > img": {
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center",
                    },
                    // SVG styles
                    svg: {
                      transition: "all 0.3s ease-in",
                    },
                    "svg:hover": {
                      backgroundColor: theme.palette.common.white,
                      fill: theme.palette.common.black,
                    },
                  })}
                />
              </Link>
            </ListItem>
          );
        })}
      </List>
    </Fragment>
  );
};

export default ContactLinks;
