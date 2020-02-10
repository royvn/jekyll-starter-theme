import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";

// import Img from "gatsby-image";

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <Layout>
      <SEO title={post.frontmatter.title} description={post.excerpt} />
      <article>
        <h1>
          {post.frontmatter.title}
        </h1>
        {post.frontmatter.image}
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </article>
    </Layout>
  )
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
        image
        categories
        tags
        author
      }
      excerpt(pruneLength: 160)
    }
  }
`;