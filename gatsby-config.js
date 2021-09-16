module.exports = {
  siteMetadata: {
    site: `Twester`,
    title: `Twester`,
    titleTemplate: `%s - Twester`,
    description: `Twitch channel points without watching Twitch!`,
    siteUrl: `https://twester.co/`,
    language: `en`,
    color: `#00171F`,
    twitter: 'ceoshikhar',
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `img`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-plugin-routes`,
      options: {
        path: `${__dirname}/src/routes.ts`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Twester`,
        short_name: `Twester`,
        start_url: `/`,
        background_color: `#00171F`,
        theme_color: `#00A8E8`,
        display: `standalone`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
        include_favicon: true, // Include favicon
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Poppins:400,700`, `Karla:400,700`],
        display: 'swap',
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-typescript`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-postcss`,
  ],
  flags: {
    DEV_SSR: false,
  },
}
