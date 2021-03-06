import React from "react";
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";

import Layout from "../components/Layout";
import SEO from "../components/Seo";
import Donation from "../components/Donation";

export default ({ data }) => {
  
  const post = data.markdownRemark;
  
  // Get the categories in format
  let categories = '';
  for (const [key, value] of post.frontmatter.categories.entries()) {
    let category = `${value}`;
    if(key < (post.frontmatter.categories.length - 1)){
      category = category + ', ';
    }
    categories += category;
  }
  
  let donationOptions = [
    {
      title: 'pakje rooibos thee',
      price: '1,59'
    },
    {
      title: 'pizza pomodori buffalo',
      price: '5,39'
    },
    {
      title: 'Magic Trackpad 2',
      price: '149,00'
    }
  ];
  
  return (
    <Layout>
      <SEO title={post.frontmatter.title} description={post.excerpt} />
      <article className="post section section--margin">
        <div className="container page-spacer">
          <header className="post-header">
            <div className="row">
              <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2">
                <Link to="/blog/" className="post-back-to-blog">
                  Terug naar overzicht
                </Link>
                {post.frontmatter.title && 
                  <h1 className="post-title">
                  {post.frontmatter.title}
                  </h1>
                }
                {post.frontmatter.date && categories &&
                  <p className="post-meta">
                    Geplaatst op {post.frontmatter.date} in {categories}.
                  </p>
                }
              </div>
            </div>
          </header>
          {post.frontmatter.image &&
            <div className="post-image">
            <Img fluid={post.frontmatter.image.childImageSharp.fluid} alt={post.frontmatter.title} style={{maxWidth: 1024}} />
            </div>
          }
          <div className="post-content">
            <div dangerouslySetInnerHTML={{ __html: post.html }} className="markdown" />
          </div>
        </div>
      </article>
      <Donation title="Vind je dit leuk?" options={donationOptions} button_url="https://www.paypal.me/royvn" />
    </Layout>
    )
  };
  
  export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "DD MM YYYY")
        image {
          childImageSharp {
            fluid(maxWidth: 1200, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        categories
        tags
        author
      }
      excerpt(pruneLength: 160)
      timeToRead
    }
  }
  `;