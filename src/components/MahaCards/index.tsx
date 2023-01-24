import React from "react";
import { Typography, ListItemText, Box } from "@mui/material";
import { withStyles, WithStyles } from "@mui/styles";
import MahaPaper from "../MahaPaper";
import Styles from "./index.Styles";
import ImageLoader from "../ImageLoader";
import * as prismicH from "@prismicio/helpers";
import { PrismicNextImageProps } from "@prismicio/next";

interface MahaCard {
  name: string;
  listHeader?: string;
  IconField?: PrismicNextImageProps["field"];
  IconColor?: string; //Color in hex code like #9774fa
  highlightedName?: string;
  highlightedSubText?: string;
  description?: string;
  listItems?: string[];
}

interface IProps {
  Cards: MahaCard[];
  paperClass?: string;
  keyHeader: string;
  headerVariant?:
    | "button"
    | "caption"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "inherit"
    | "overline"
    | "subtitle1"
    | "subtitle2"
    | "body1"
    | "body2"
    | undefined;
}

const MahaCards: React.FC<IProps & WithStyles<typeof Styles>> = ({
  classes,
  Cards,
  paperClass,
  keyHeader,
  headerVariant,
}) => {
  return (
    <React.Fragment>
      {Cards.map(
        (
          {
            IconField,
            name,
            description,
            IconColor,
            highlightedName,
            highlightedSubText,
            listItems,
            listHeader,
          },
          index
        ) => (
          <React.Fragment key={`${keyHeader}${index}`}>
            <MahaPaper className={`${paperClass}`}>
              <>
                {prismicH.isFilled.image(IconField) && (
                  <Box
                    sx={{
                      "& img": {
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "center",
                      },
                    }}
                  >
                    <ImageLoader
                      field={IconField}
                      className={classes.icon}
                      style={{ color: IconColor }}
                    />
                  </Box>
                )}
                <div className={classes.headersSection}>
                  <Typography
                    className={classes.header}
                    variant={
                      headerVariant
                        ? headerVariant
                        : highlightedName
                        ? "h6"
                        : "h5"
                    }
                  >
                    {name}&nbsp;
                    {highlightedName && (
                      <span className={classes.highlightedHeader}>
                        {highlightedName}
                      </span>
                    )}
                  </Typography>
                </div>
                {highlightedSubText && (
                  <Typography color={"primary"} className={classes.subHeader}>
                    {highlightedSubText}
                  </Typography>
                )}
                {description && (
                  <Typography className={classes.description}>
                    {description}
                  </Typography>
                )}
                {listItems && listItems.length > 0 && listHeader && (
                  <Typography className={classes.listHeader}>
                    {listHeader + " :"}
                  </Typography>
                )}
                {listItems && (
                  <ul className={classes.list}>
                    {listItems.map((listItem) => (
                      <li className={classes.listItem} key={listItem}>
                        <ListItemText>{listItem}</ListItemText>
                      </li>
                    ))}
                  </ul>
                )}
              </>
            </MahaPaper>
          </React.Fragment>
        )
      )}
    </React.Fragment>
  );
};

export default withStyles(Styles)(MahaCards);
