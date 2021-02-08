import React from "react";
import { Link, graphql, StaticQuery } from "gatsby";

import Layout from "../components/Layout";
import SEO from "../components/Seo";

import Intro from "../components/Intro";
import Banner from "../components/Banner";
import Hero from "../components/Hero";
import LatestPosts from "../components/LatestPosts";
import Services from "../components/Services";
import Highlights from "../components/Highlights";
import Landing from "../components/Landing";

class IndexPage extends React.Component {

  render() {
    const { data } = this.props;
    return (
      <StaticQuery query={graphql`
        query {

          allMarkdownRemark(filter: {fileAbsolutePath: {regex: "content/posts/"}}, limit: 8, sort: {order: DESC, fields: frontmatter___date}) {
            edges {
              node {
                id
                frontmatter {
                  title
                  date(formatString: "DD MM YYYY")
                  tags
                  image {
                    childImageSharp {
                      fluid(maxWidth: 1200, quality: 100) {
                        ...GatsbyImageSharpFluid_withWebp
                      }
                    }
                  }
                }
                excerpt
                html
                timeToRead
                fields {
                  slug
                }
              }
            }
          }

          image: file(relativePath: {eq: "royvn.jpg"}) {
            id
            childImageSharp {
              fluid(quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }

          heroImage: file(relativePath: {eq: "desk.jpg"}) {
            id
            childImageSharp {
              fluid(maxWidth: 1600, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }

        }
      `} render={data => ( 
        <Layout>
          <SEO title="Home" description="Roy van Neden | Front-end Developer &amp; Shopify Expert"/>
          <Hero  image={data.heroImage.childImageSharp.fluid} title="✌😎🐵 Hi, Ik ben Roy van Neden" />
          {/* <Landing /> */}
          {/* <Services/> */}
          <LatestPosts title="Laatst gepubliceerd" paragraph="Hier deel en verzamel ik dingen over front-end development, design, Shopify &amp; Ecommerce." data={data.allMarkdownRemark.edges} />
          {/* <Highlights/> */}
          {/* <Banner title="Shopify - Aerial Theme" subtitle="Helemaal zelf ontworpen en ontwikkeld Ecommerce theme!" link_to="/blog/" link_text="Button text" /> */}
        </Layout>
      )} />
    );    
  }

}

export default IndexPage;