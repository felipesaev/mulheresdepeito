module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    siteUrl: `https://www.mulheredepeito.netlify.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    
    
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Mulheres de Peito`,
        short_name: `Mulheres de Peito`,
        start_url: `/`,
        background_color: `#ee2655`,
        theme_color: `#ee2655`,
        display: `minimal-ui`,
        icon: `src/images/mbapp.jpg`,
      },
    },
    

    `gatsby-plugin-sitemap`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
     `gatsby-plugin-offline`,
  ],
}
