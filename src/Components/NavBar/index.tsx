import React, { useState } from "react";
import { withStyles, WithStyles, useTheme } from "@material-ui/styles";
import { Theme, Typography, useMediaQuery } from "@material-ui/core";
import Scrollspy from "react-scrollspy";
import { SectionsInterface } from "../../Sections";
import MobileNavBar from "../MobileNavBar";
import Styles from "./index.Styles";

const position = 64;

interface INavBar extends WithStyles<typeof Styles> {
    Sections: SectionsInterface;
}
const NavBar: React.FC<INavBar> = ({ classes, Sections }) => {
    const theme: Theme = useTheme();
    const StylesWithTheme = Styles(theme);
    const isMobileScreen = !useMediaQuery(theme.breakpoints.up("sm"));

    const [scrolled, setScrolled] = useState(false);

    const handleScroll = () => {
        // console.log(scrolled);
        if (window.scrollY > position) {
            // console.log("Setting Scroll true", scrolled);
            setScrolled(true);
        }
        if (window.scrollY < position) {
            // console.log("Setting Scroll false");
            setScrolled(false);
        }
    };

    React.useEffect(() => {
        document.addEventListener("scroll", handleScroll);
        return () => {
            document.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header
            className={classes.header}
            style={{ backgroundColor: scrolled ? theme.palette.background.paper : "transparent" }}
        >
            {isMobileScreen && <MobileNavBar Sections={Sections} />}
            {!isMobileScreen && (
                <Scrollspy
                    items={Sections.map(({ id }) => id)}
                    currentClassName={classes.activeLink}
                    style={{ ...StylesWithTheme.list }}
                    offset={-100}
                >
                    {Sections.map(({ name, id }) => (
                        <li key={id} className={classes.linkItem}>
                            <a href={`#${id}`}>
                                <Typography color={"inherit"} variant="h6">
                                    {name}
                                </Typography>
                            </a>
                        </li>
                    ))}
                </Scrollspy>
            )}
        </header>
    );
};

export default withStyles(Styles)(NavBar);
