import React from "react";
import { withStyles, WithStyles } from "@material-ui/styles";
import { Typography, Avatar, List, ListItem } from "@material-ui/core";
import ContactLinks from "../../Components/ContactLinks";
import Styles from "./index.Styles";
import Img from "gatsby-image";
import StaticHomeData from "../../Utils/StaticDataHooks/Home";
import SVGLoader from "../../Components/SvgLoader";

const Home: React.FC<WithStyles<typeof Styles>> = ({ classes }) => {
    const data = StaticHomeData();

    return (
        <div className={`${classes.containerMediaQueries} ${classes.container}`}>
            <div className={classes.avatarBorder}>
                <Avatar className={classes.avatar}>
                    <Img fluid={data.profile_picture.localFile.childImageSharp.fluid} />
                </Avatar>
            </div>
            <div>
                <Typography className={classes.promo}>{"Hello I'm"}</Typography>
                <Typography variant="h2" className={classes.name}>
                    {`${data.first_name} ${data.middle_name} ${data.last_name}`}
                </Typography>
                <Typography variant="h4">{data.job_role}</Typography>
                <List>
                    {data.main_links.map(({ icon, link, name }) => {
                        const svgPath = icon.localFile.relativePath;

                        return (
                            <ListItem key={name} className={link.url ? classes.listItem : ""}>
                                <a href={link.url === "" ? undefined : link.url} className={classes.listItemLink}>
                                    <SVGLoader className={classes.listItemIcon} path={svgPath} />
                                    {name}
                                </a>
                            </ListItem>
                        );
                    })}
                </List>
                <ContactLinks />
            </div>
        </div>
    );
};

export default withStyles(Styles)(Home);
