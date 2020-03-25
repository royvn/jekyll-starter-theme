/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

/**
 * @param {object} node - Called when a new page is created. This extension API is useful for programmatically manipulating pages created by other plugins e.g. if you want paths without trailing slashes.
 * https://www.gatsbyjs.org/docs/node-apis/#onCreateNode
 */
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  let slug;
  // Check if type is markdown
  if (node.internal.type === `MarkdownRemark`) {
    // Check if the slug in markdown is there, format needs to be /slug-example/
    if(node.frontmatter.slug) {
      slug = node.frontmatter.slug;
    } else {
      // Use the default createFilePath as fallback
      slug = createFilePath({ node, getNode, basePath: `src/posts` });
    }
    const prefix = '/blog'
    const slugWithPrefix = prefix+slug;
    // const fileNode = getNode(node.parent);
    createNodeField({
      node,
      name: `slug`,
      value: slugWithPrefix,
    });
  }
}

/**
 * 
 */
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `);
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    // console.log(node.fields.slug);
    const slug = node.fields.slug;
    createPage({
      path: slug,
      component: path.resolve(`./src/templates/article.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.fields.slug,
      },
    })
  });
  // console.log(JSON.stringify(result, null, 4));
}