import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import PostLink from "../components/post-link";

const BlogPage = ({data}) => (
  <Layout>
    <SEO title="Blog" description="Zo nu en dan deel ik op mijn blog dingen die ik interessant vind of geleerd hebt. Kijk gerust rond 🙈."/>
    { console.log(data)}
    <h1>Blog</h1>
    <div className="post-links">
      {data.allMarkdownRemark.edges.map(({node}) => (
        <PostLink key={node.id} node={node} />
      ))}
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