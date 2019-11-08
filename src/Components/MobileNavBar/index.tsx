import React, { useState } from "react";
import { withStyles, WithStyles, useTheme } from "@material-ui/styles";
import { Menu as MenuIcon, Close as CloseIcon } from "mdi-material-ui";
import Scrollspy from "react-scrollspy";
import { Typography, Theme } from "@material-ui/core";
import { SectionsInterface } from "../../Sections";
import Styles from "./index.Styles";

interface IMobileNavBar extends WithStyles<typeof Styles> {
    Sections: SectionsInterface;
}
const MobileNavBar: React.FC<IMobileNavBar> = ({ classes, Sections }) => {
    const theme: Theme = useTheme();
    const StylesWithTheme = Styles(theme);

    const [isMobileMenuOpen, setMobileMenu] = useState(true);

    const handleOpenMobileMenu = () => {
        setMobileMenu(!isMobileMenuOpen);
        return true;
    };

    return (
        <React.Fragment>
            <div className={classes.mobileHeader}>
                <MenuIcon className={classes.icon} onClick={handleOpenMobileMenu} />
                <div className={`${classes.mobileMenu} ${isMobileMenuOpen ? classes.mobileMenuOpen : ""}`}>
                    <CloseIcon className={classes.mobileMenuCloseIcon} onClick={handleOpenMobileMenu} />
                    <Scrollspy
                        items={Sections.map(({ id }) => id)}
                        currentClassName={classes.activeLink}
                        style={{ ...StylesWithTheme.list }}
                    >
                        {Sections.map(({ name, id }) => (
                            <li key={id} className={classes.linkItem}>
                                <a href={`#${id}`} onClick={handleOpenMobileMenu}>
                                    <Typography color={"inherit"} variant="h6" className={classes.linkText}>
                                        {name}
                                    </Typography>
                                </a>
                            </li>
                        ))}
                    </Scrollspy>
                </div>
            </div>
        </React.Fragment>
    );
};

export default withStyles(Styles)(MobileNavBar);
