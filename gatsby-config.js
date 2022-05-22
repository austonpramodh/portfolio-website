// eslint-disable-next-line @typescript-eslint/no-var-requires
const dotenv = require("dotenv");

dotenv.config(); // required for importing .env file
dotenv.config({
    path: `.env.${process.env.NODE_ENV}`, // required for .env.production
});

/* eslint-disable @typescript-eslint/camelcase */
module.exports = {
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/Images`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Auston Pramodh Barboza`,
                short_name: `Auston`,
                start_url: `/`,
                background_color: `#100e17`,
                theme_color: `#100e17`,
                display: `minimal-ui`,
                icon: `src/Images/favicon.png`, // This path is relative to the root of the site.
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
        `gatsby-plugin-typescript`,
        `gatsby-theme-material-ui`,
        `gatsby-plugin-image`,
        {
            resolve: "gatsby-source-prismic",
            options: {
                repositoryName: process.env.GATSBY_PRISMIC_REPO_NAME,
                accessToken: process.env.PRISMIC_ACCESS_TOKEN,
                customTypesApiToken: process.env.PRISMIC_CUSTOM_TYPES_API_TOKEN,
                linkResolver: () => doc => {
                    // URL for a category type
                    if (doc.type === "category") {
                        return `/category/${doc.uid}`;
                    }
                    // URL for a product type
                    if (doc.type === "product") {
                        return `/product/${doc.uid}`;
                    }
                    // URL for a page type
                    if (doc.type === "page") {
                        return `/${doc.uid}`;
                    }
                    // Backup for all other types
                    return "/";
                },
                // shouldDownloadImage: () => {
                //     // Return true to download the image or false to skip.
                //     return true;
                // },
                // schemas: {
                //     homepage: require("./src/Schemas/homepage.json"),
                //     blog_post: require("./src/Schemas/blogpost.json"),
                // },
            },
        },
        // "gatsby-plugin-svgr",
        // {
        //     resolve: `gatsby-plugin-github-ribbon`,
        //     options: {
        //         project: `https://github.com/austonpramodh/portfolio-website`,
        //         color: `red`,
        //         position: `left`,
        //     },
        // },
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: process.env.GATSBY_GA_TRACKING_ID,
            },
        },
    ],
};
