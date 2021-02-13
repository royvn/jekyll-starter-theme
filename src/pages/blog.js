import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import SEO from "../components/Seo";
import FeaturedPost from "../components/FeaturedPost";
import Intro from "../components/Intro";

const BlogPage = ({data}) => (
  <Layout>
    <SEO title="Blog" description="Hier deel en verzamel ik dingen over front-end development, design, Shopify &amp; Ecommerce." />
    <Intro title="Blog" paragraph="Hier deel en verzamel ik dingen over front-end development, design, Shopify &amp; Ecommerce." totalPosts={data.allMarkdownRemark.edges.length} />
    <div className="section section--margin">
      <div className="container page-spacer">
        <div className="featured-posts">
          {data.allMarkdownRemark.edges.map(({node}) => (
            <FeaturedPost key={node.id} node={node} />
          ))}
        </div>
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