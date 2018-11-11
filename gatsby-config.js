module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.example.com',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-styled-components',
    },
    'gatsby-plugin-eslint',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-favicon',
      options: {
        // logo: './src/favicon.png',
        logo: './src/images/icons/surprise.svg',
        lang: 'en-UK',
      },
    },
  ],
};
