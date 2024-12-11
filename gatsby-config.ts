import type { GatsbyConfig } from "gatsby";
const path = require("path");

const config: GatsbyConfig = {
  siteMetadata: {
    title: `zimon`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": "src/images/favicon.png"
      }
    },
    "gatsby-plugin-postcss",
    "gatsby-plugin-sitemap",
  ],
};

export default config;
