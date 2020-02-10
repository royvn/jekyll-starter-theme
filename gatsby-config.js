module.exports = {
  siteMetadata: {
		siteUrl: `https://royvn.github.io`,
		title: `Roy van Neden`,
		description: `Designer & developer.`,
    author: `Roy van Neden`,
    authorGithub: `https://github.com/royvn`,
    authorInstagram: `https://www.instagram.com/royvn/`,
    authorLinkedin: `https://www.linkedin.com/in/roy-van-neden-10549761/`,
    authorTwitter: `https://www.twitter.com/@royvn_`
	},
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 640,
            },
          },
        ],
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Roy van Neden`,
        short_name: `RVN`,
        start_url: `/`,
        background_color: `#56b4d3`,
        theme_color: `#56b4d3`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
