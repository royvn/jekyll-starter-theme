import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import PostLink from "../components/post-link";

const BlogPage = ({data}) => (
  <Layout>
    <SEO title="Blog" description="Zo nu en dan deel ik op mijn blog dingen die ik interessant vind of geleerd hebt. Kijk gerust rond 🙈." />
    <h1>Blog</h1>
    <div className="grid page-width page-spacer">
      <div className="grid__item gcs-xs-1 gce-xs-13 post-links">
        {data.allMarkdownRemark.edges.map(({node}) => (
          <PostLink key={node.id} node={node} />
        ))}
      </div>
    </div>
  </Layout>
);

export default BlogPage;

export const data = graphql`
{
  allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
    totalCount
    edges {
      node {
        id
        fields {
          slug
        }
        frontmatter {
          title
          date(formatString: "D M Y")
          image {
            childImageSharp {
              fluid(maxWidth: 608, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
        excerpt(pruneLength: 64)
        html
        timeToRead
        wordCount {
          words
        }
      }
      next {
        frontmatter {
          title
        }
      }
      previous {
        frontmatter {
          title
        }
      }
    }
  }
}
`;