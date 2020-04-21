import React from "react";
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";

import Layout from "../components/Layout";
import SEO from "../components/Seo";

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <Layout>
      <SEO title={post.frontmatter.title} description={post.excerpt} />
      <article className="post">
        <header className="post-header">
          <div className="page-width page-spacer grid align-items-center">
            <div className="post-header__content gcs-xs-1 gce-xs-13 gcs-lg-1 gce-lg-5">
              <Link to="/blog" className="back">
                Terug naar overzicht
              </Link>
              <h1 className="post-title">
                {post.frontmatter.title}
              </h1>
              <p className="post-meta">
                Geplaatst op {post.frontmatter.date} in {post.frontmatter.categories}
              </p>
            </div>
            <div className="post-header__image gcs-xs-1 gce-xs-13 gcs-lg-6 gce-lg-13">
                <div className="post-image">
                  <Img fluid={post.frontmatter.image.childImageSharp.fluid} alt={post.frontmatter.title} style={{maxWidth: 1024}} />
                </div>
              </div>
          </div>
        </header>

        <div className="page-width page-spacer grid">
          <div dangerouslySetInnerHTML={{ __html: post.html }} className="post-content content gcs-xs-1 gce-xs-13 gcs-lg-3 gce-lg-11" />
        </div>

        {/* <div className="grid">
          <div className="grid__item grid__item--12">
            <h2>
              Bekijk ook
            </h2>
          </div>
        </div> */}

        {/* <nav className="post-navigation">
          <a href="" className="post-navigation__url post-navigation__url--has-image">
            <div>
              <span className="post-navigation__subtitle">
                Vorig artikel
              </span>
              <span className="post-navigation__title">
                page.previous.title
              </span>
            </div>
            <img src=" page.previous.image " alt="page.previous.title" />
          </a>
          <a href="#" className="post-navigation__url post-navigation__url--has-image">
            <div>
              <span className="post-navigation__subtitle">Volgend artikel</span>
              <span className="post-navigation__title">
                page.next.title
              </span>
            </div>
            <img src="page.next.image" alt="page.next.title" />
          </a>      
        </nav> */}
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