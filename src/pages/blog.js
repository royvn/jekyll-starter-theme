import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import FeaturedPost from "../components/featured-post";
import ToolkitHeadline from "../components/toolkit-headline";

const BlogPage = ({data}) => (
  <Layout>
    <SEO title="Blog" description="Zo nu en dan deel ik op mijn blog dingen die ik interessant vind of geleerd hebt. Kijk gerust rond 🙈." />
    <ToolkitHeadline title="Blog" subtitle="Zo nu en dan deel ik op mijn blog dingen die ik interessant vind of geleerd hebt" />

    <div className="grid page-width page-spacer">
      <div className="grid__item gcs-xs-1 gce-xs-13 featured-posts">
        {data.allMarkdownRemark.edges.map(({node}) => (
          <FeaturedPost key={node.id} node={node} />
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