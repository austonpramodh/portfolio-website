import React from "react";
import { withStyles, WithStyles } from "@material-ui/styles";
import { Typography } from "@material-ui/core";
import MahaPaper from "../../Components/MahaPaper";
import BasicInfo from "../../Constants/BasicInfo";
import { ContactsSection } from "../../Constants/Content";
import ContactLinks from "../../Components/ContactLinks";
import ContactForm from "../../Components/ContactForm";
import Styles from "./index.Styles";

const Contact: React.FC<WithStyles<typeof Styles>> = ({ classes }) => {
    const [domain, setDomain] = React.useState("");
    React.useLayoutEffect(() => {
        setDomain(document.domain);
    }, []);

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
            <div className={classes.contactFormHeading}>
                <Typography variant="h2">Lets Connect!</Typography>
                <ContactForm />
            </div>
            <div className={classes.footer}>
                <Typography className={classes.footerText}>All right reserved {BasicInfo.name} @ 2020</Typography>
                <div className={classes.footerLinksContainer}>
                    <ContactLinks />
                </div>

                <a href={`https://ipv6-test.com/validate.php?url=${domain}`}>
                    <img src="https://ipv6-test.com/button-ipv6-big.png" alt="ipv6 ready" title="ipv6 ready" />
                </a>
            </div>
        </div>
    );
};

export default withStyles(Styles)(Contact);
