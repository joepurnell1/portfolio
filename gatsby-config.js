module.exports = {
  siteMetadata: {
    title: `The portfolio of Joe Purnell`,
    description: `The personal site and stomping ground of Joe Purnell`,
    author: `Joe Purnell`,
    siteUrl: 'https://joepurnell.dev',
    social: {
      twitter: '@joepurnell8',
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
        name: `The portfolio of Joe Purnell`,
        short_name: `joepurnell.dev`,
        start_url: `/`,
        display: `standalone`,
        icon: `src/images/favicon.png`,
      },
    },
    {
      resolve: "gatsby-source-dev",
      options: {
        username: 'joepurnell1'
      }
    }
  ],
}
