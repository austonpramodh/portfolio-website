import React, { useState } from "react";
import { useTheme, Typography, Theme } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Styles from "./index.Styles";
import { withStyles, WithStyles } from "@mui/styles";
import { Section } from "../NavBar";

interface IMobileNavBar extends WithStyles<typeof Styles> {
    Sections: Section[];
}
const MobileNavBar: React.FC<IMobileNavBar> = ({ classes, Sections }) => {
    const theme: Theme = useTheme();
    const StylesWithTheme = Styles(theme);

    const [isMobileMenuOpen, setisMobileMenuOpen] = useState(false);
    const [isMobileMenuNeeded, setMobileMenuNeed] = useState(false);

    const handleOpenMobileMenu = () => {
        document.body.classList.add(classes.mobileNavActiveBodyClass);
        setMobileMenuNeed(true);
        setTimeout(() => {
            setisMobileMenuOpen(true);
        }, 20);
        return true;
    };

    const handleCloseMobileMenu = () => {
        document.body.classList.remove(classes.mobileNavActiveBodyClass);
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
                        {/* <Scrollspy
              items={Sections.map(({ id }) => id)}
              currentClassName={classes.activeLink}
              style={{ ...(StylesWithTheme.list as React.CSSProperties) }}
              offset={-100}
            > */}
                        {Sections.map(({ id, label }) => (
                            <li key={id} className={classes.linkItem}>
                                <a href={`#${id}`} onClick={handleCloseMobileMenu}>
                                    <Typography color={"textPrimary"} variant="h6" className={classes.linkText}>
                                        {label}
                                    </Typography>
                                </a>
                            </li>
                        ))}
                        {/* </Scrollspy> */}
                    </div>
                )}
            </div>
        </React.Fragment>
    );
};

export default withStyles(Styles)(MobileNavBar);
