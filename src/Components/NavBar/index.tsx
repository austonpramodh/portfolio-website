import React, { useState } from "react";
import { withStyles, WithStyles, useTheme } from "@material-ui/styles";
import { Theme, Typography, useMediaQuery } from "@material-ui/core";
import Scrollspy from "react-scrollspy";
import { Menu as MenuIcon } from "mdi-material-ui";
import Sections from "../../Sections";
import Styles from "./index.Styles";

const position = 128;
const NavBar: React.FC<WithStyles<typeof Styles>> = ({ classes }) => {
    const theme: Theme = useTheme();
    const StylesWithTheme = Styles(theme);
    const matches = useMediaQuery(theme.breakpoints.up("sm"));

    const [scrolled, setScrolled] = useState(true);

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

    const componentDidMount = () => {
        document.addEventListener("scroll", handleScroll);
    };
    const componentDidUnmount = () => {};

    React.useEffect(() => {
        componentDidMount();
        return componentDidUnmount;
    }, [1]);

    return (
        <header
            className={classes.header}
            style={{ backgroundColor: scrolled ? theme.palette.background.paper : "transparent" }}
        >
            {!matches && (
                <div className={classes.mobileHeader}>
                    <MenuIcon className={classes.icon} />
                </div>
            )}
            {matches && (
                <Scrollspy
                    items={Sections.map(({ id }) => id)}
                    currentClassName={classes.activeLink}
                    style={{ ...StylesWithTheme.list }}
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
