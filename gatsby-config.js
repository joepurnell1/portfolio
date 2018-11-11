module.exports = {
  siteMetadata: {
    siteUrl: 'https://vigorous-blackwell-2e8597.netlify.com/',
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
      },
    },
  ],
};
