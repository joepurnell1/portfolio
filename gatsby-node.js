const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query {
        allDevArticles {
          nodes {
            article {
              id
              slug
            }
          }
        }
      }
  `);

  result.data.allDevArticles.nodes.forEach(node => {

    const {slug, id} = node.article;

    createPage({
      path: `/blog/${slug.substring(0, slug.lastIndexOf('-'))}`,
      component: path.resolve(`./src/templates/blog-post.js`),
      context: {
        id: id.toString(),
      },
    })
  })
}