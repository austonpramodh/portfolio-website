import React, { useState } from "react";
import { withStyles, WithStyles } from "@material-ui/styles";
import { Typography, Hidden } from "@material-ui/core";
import Scrollspy from "react-scrollspy";
import { SectionsInterface } from "../../Sections";
import MobileNavBar from "../MobileNavBar";
import Styles from "./index.Styles";

const position = 64;

interface INavBar extends WithStyles<typeof Styles> {
    Sections: SectionsInterface;
}
const NavBar: React.FC<INavBar> = ({ classes, Sections }) => {
    const [scrolled, setScrolled] = useState(false);

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
        <header className={`${classes.header} ${scrolled ? classes.headerActive : ""}`}>
            <Hidden smUp implementation="css">
                <MobileNavBar Sections={Sections} />
            </Hidden>
            <Hidden xsDown implementation="css">
                <Scrollspy
                    className={classes.navItemsContainer}
                    items={Sections.map(({ id }) => id)}
                    currentClassName={classes.activeLink}
                    offset={-100}
                >
                    {Sections.map(({ name, id }) => (
                        <li key={id} className={classes.linkItem}>
                            <a href={`#${id}`}>
                                <Typography color={"textPrimary"} variant="h6">
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
