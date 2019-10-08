import React from "react";
import { withStyles, WithStyles } from "@material-ui/styles";
import { Typography } from "@material-ui/core";
import MahaPaper from "../../Components/MahaPaper";
import { ContactsSection } from "../../Constants/Content";
import ContactLinks from "../../Components/ContactLinks";
import ContactForm from "../../Components/ContactForm";
import Styles from "./index.Styles";

const Contact: React.FC<WithStyles<typeof Styles>> = ({ classes }) => {
    return (
        <div className={`${classes.container} ${classes.containerMediaQueries}`}>
            <Typography variant="h2">Contact Me</Typography>
            <div className={classes.contactCardsContainer}>
                {ContactsSection.ContactsCard.map(({ Icon, content, heading }, key) => (
                    <MahaPaper key={`${key}Contact`} className={classes.paper}>
                        <div className={classes.iconContainer}>
                            <Icon className={classes.icon} />
                        </div>
                        <Typography className={classes.cardHeading} variant="h4">
                            {heading}
                        </Typography>
                        <Typography className={classes.content}>{content}</Typography>
                    </MahaPaper>
                ))}
            </div>
            <div>
                <ContactForm />
            </div>
            <div className={classes.footer}>
                <Typography className={classes.footerText}>All right reserved Auston Pramodh Barboza @ 2019</Typography>
                <div className={classes.footerLinksContainer}>
                    <ContactLinks />
                </div>
            </div>
        </div>
    );
};

export default withStyles(Styles)(Contact);
