import React from "react";
import { graphql, StaticQuery } from "gatsby";

import Layout from "../components/Layout";
import SEO from "../components/Seo";
import Banner from "../components/Banner";

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" description="Laat iets van je horen, gezellig en leuk!" />
    <div className="page-content markdown">
      <p>
      Contact
      Laat iets van je horen!
      </p>
      <StaticQuery query={graphql`
      query {
        allMarkdownRemark(filter: {}, limit: 5) {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
        image1: file(relativePath: {eq: "vissershaven.jpg"}) {
          id
          childImageSharp {
            fluid(maxWidth: 1200, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
      `} render={data => (
        <Banner image={data.image1.childImageSharp.fluid}/>
      )} />
      <p>
        Wil je iets vragen of met mij in contact komen? Stuur gerust een berichtje op <a href="https://www.linkedin.com/in/roy-van-neden-10549761/">Linkedin</a>! Direct mailen kan ook naar roy.van.neden@gmail.com.
      </p>
    </div>
  </Layout>
);

export default ContactPage;