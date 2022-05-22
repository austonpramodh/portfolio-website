import React from "react";
import { withStyles, WithStyles } from "@material-ui/styles";
import { Typography } from "@material-ui/core";
import MahaPaper from "../../Components/MahaPaper";
import ContactLinks from "../../Components/ContactLinks";
import ContactForm from "../../Components/ContactForm";
import Styles from "./index.Styles";
import StaticContactMeLinksData from "../../Utils/StaticDataHooks/ContactMeLinks";
import SvgLoader from "../../Components/SvgLoader";

const Contact: React.FC<WithStyles<typeof Styles>> = ({ classes }) => {
    const [domain, setDomain] = React.useState("");
    React.useLayoutEffect(() => {
        setDomain(document.domain);
    }, []);

    const data = StaticContactMeLinksData();

    return (
        <div className={`${classes.container} ${classes.containerMediaQueries}`}>
            <Typography variant="h2" className={classes.header}>
                Contact Me
            </Typography>
            <div className={classes.contactCardsContainer}>
                {data.contact_me_links.map((eachContactMeLink, key) => (
                    <MahaPaper key={`${key}Contact`} className={classes.paper}>
                        <div className={classes.iconContainer}>
                            <SvgLoader url={eachContactMeLink.image.url} className={classes.icon} />
                        </div>
                        <Typography className={classes.cardHeading} variant="h4">
                            {eachContactMeLink.title}
                        </Typography>
                        <a href={eachContactMeLink.link.url ? eachContactMeLink.link.url : undefined}>
                            <Typography className={classes.content}>{eachContactMeLink.link_name}</Typography>
                        </a>
                    </MahaPaper>
                ))}
            </div>
            <Typography className={classes.contactFormHeading} variant="h2">
                Lets Connect!
            </Typography>
            <div>
                <ContactForm />
            </div>
            <div className={classes.footer}>
                <Typography className={classes.footerText}>{data.footer_text}</Typography>
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
