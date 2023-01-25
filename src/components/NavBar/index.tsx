import React, { useState } from "react";
import {
  Typography,
  Hidden,
  Box,
  List,
  ListItem,
  Link,
  GlobalStyles,
} from "@mui/material";
// import { Scrollspy } from "@makotot/ghostui";
// import { SectionsInterface } from "../../Sections";
// import MobileNavBar from "../MobileNavBar";
import useStyles from "./index.Styles";
import MobileNavBar from "../MobileNavBar";

const position = 64;

export interface Section {
  label: string;
  link: string;
  id: string;
}

type Props = {
  sections: Section[];
};

const NavBar: React.FunctionComponent<Props> = ({ sections }) => {
  const [scrolled, setScrolled] = useState(false);
  const classes = useStyles();

  const handleScroll = () => {
    if (window.scrollY > position) {
      setScrolled(true);
    }
    if (window.scrollY < position) {
      setScrolled(false);
    }
  };

  React.useEffect(() => {
    handleScroll();
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${classes.header} ${scrolled ? classes.headerActive : ""}`}
    >
      <GlobalStyles
        styles={(theme) => ({
          ".active-scroll-spy": {
            "&:hover": {
              color: theme.palette.text.primary,
            },
            "& > h6": {
              cursor: "default",
              borderBottom: `2px solid ${theme.palette.primary.dark}`,
            },
          },
        })}
      />
      <Hidden smUp implementation="css">
        <MobileNavBar Sections={sections} />
      </Hidden>
      <Hidden smDown implementation="css">
        <List
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            listStyleType: "none",
            marginTop: 0,
            marginBottom: 0,
            backgroundColor: "transparent",
            padding: 0,
            alignItems: "center",
          }}
        >
          {sections.map(({ label, link, id }) => (
            <ListItem
              key={`${label}-${link}`}
              sx={{
                width: "auto",
                padding: 0,
              }}
            >
              <Link
                className={classes.linkItem}
                // activeClass={classes.activeLink}
                href={link}
                {...{
                  "data-to-scrollspy-id": id,
                }}
              >
                <Typography color={"inherit"} variant="h6">
                  {label}
                </Typography>
              </Link>
            </ListItem>
          ))}
        </List>
      </Hidden>
    </header>
  );
};

export default NavBar;
