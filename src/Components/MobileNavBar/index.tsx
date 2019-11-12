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

    const [isMobileMenuOpen, setisMobileMenuOpen] = useState(false);
    const [isMobileMenuNeeded, setMobileMenuNeed] = useState(false);

    const handleOpenMobileMenu = () => {
        setMobileMenuNeed(true);
        setTimeout(() => {
            setisMobileMenuOpen(true);
        }, 20);
        return true;
    };

    const handleCloseMobileMenu = () => {
        setisMobileMenuOpen(false);
        setTimeout(() => {
            setMobileMenuNeed(false);
        }, 350);
        return true;
    };
    return (
        <React.Fragment>
            <div className={classes.mobileHeader}>
                <MenuIcon className={classes.icon} onClick={handleOpenMobileMenu} />
                {isMobileMenuNeeded && (
                    <div className={`${classes.mobileMenu} ${isMobileMenuOpen ? classes.mobileMenuOpen : ""}`}>
                        <CloseIcon className={classes.mobileMenuCloseIcon} onClick={handleCloseMobileMenu} />
                        <Scrollspy
                            items={Sections.map(({ id }) => id)}
                            currentClassName={classes.activeLink}
                            style={{ ...StylesWithTheme.list }}
                            offset={-100}
                        >
                            {Sections.map(({ name, id }) => (
                                <li key={id} className={classes.linkItem}>
                                    <a href={`#${id}`} onClick={handleCloseMobileMenu}>
                                        <Typography color={"inherit"} variant="h6" className={classes.linkText}>
                                            {name}
                                        </Typography>
                                    </a>
                                </li>
                            ))}
                        </Scrollspy>
                    </div>
                )}
            </div>
        </React.Fragment>
    );
};

export default withStyles(Styles)(MobileNavBar);
