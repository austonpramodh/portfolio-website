import React, { Fragment } from "react";
import { Box, BoxProps, Link, List, ListItem } from "@mui/material";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicImageProps } from "@prismicio/react";
import { ReactSVG } from "react-svg";

type Props = {
  linksData: {
    link: string;
    name: string;
    icon: PrismicImageProps["field"] | null;
  }[];
};

type ImageLoaderProps = {
  field: PrismicImageProps["field"];
} & BoxProps;

const ImageLoader: React.FunctionComponent<ImageLoaderProps> = ({
  field,
  ...restProps
}) => {
  if (!field?.url) {
    return null;
  }

  const isSVG = field?.url?.includes(".svg");

  return (
    <Box {...restProps}>
      {isSVG ? (
        <>
          <ReactSVG src={field.url} />
        </>
      ) : (
        <PrismicNextImage field={field} />
      )}
    </Box>
  );
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
