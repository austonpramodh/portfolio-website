import React, { useState } from "react";
import { withStyles, WithStyles, useTheme } from "@material-ui/styles";
import { Theme, Typography, Hidden } from "@material-ui/core";
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
        handleScroll();
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
            <Hidden smUp implementation="css">
                <MobileNavBar Sections={Sections} />
            </Hidden>
            <Hidden xsDown implementation="css">
                <Scrollspy
                    items={Sections.map(({ id }) => id)}
                    currentClassName={classes.activeLink}
                    style={{ ...(StylesWithTheme.list as React.CSSProperties) }}
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
            </Hidden>
        </header>
    );
};

export default withStyles(Styles)(NavBar);
