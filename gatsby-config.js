module.exports = {
  siteMetadata: {
    title: 'Gatsby Dev Portfolio',
    name: 'Grace Hopper'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-developer-portfolio',
        short_name: 'devstarter',
        start_url: '/',
        icon: 'src/images/favicon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
  ],
}
