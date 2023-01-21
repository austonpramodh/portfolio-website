import React, { useState } from "react";
import { Typography, Hidden, Box } from "@mui/material";
// import { Scrollspy } from "@makotot/ghostui";
// import { SectionsInterface } from "../../Sections";
// import MobileNavBar from "../MobileNavBar";
import useStyles from "./index.Styles";
import { Link } from "react-scroll";

const position = 64;

interface Section {
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

  // Scroll Spy stuff
  React.useEffect(() => {
    console.log("Hello");
  }, []);

  return (
    <header
      className={`${classes.header} ${scrolled ? classes.headerActive : ""}`}
    >
      {/* <Hidden smUp implementation="css">
        <MobileNavBar Sections={Sections} />
      </Hidden> */}
      <Hidden xsDown implementation="css">
        <Box className={classes.navItemsContainer}>
          {sections.map(({ label, link, id }) => (
            <li key={`${label}-${link}`}>
              <Link
                className={`${classes.linkItem}`}
                to={link}
                name={id}
                activeClass={classes.activeLink}
                href={link}
              >
                <Typography color={"inherit"} variant="h6">
                  {label}
                </Typography>
              </Link>
            </li>
          ))}
        </Box>
      </Hidden>
    </header>
  );
};

export default NavBar;
