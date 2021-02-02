import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/Layout";
import SEO from "../components/Seo";

import Intro from "../components/Intro";
import Banner from "../components/Banner";
import LatestPosts from "../components/LatestPosts";
import Services from "../components/Services";
import Highlights from "../components/Highlights";
import Landing from "../components/Landing";

class IndexPage extends React.Component {

  render() {
    const { data } = this.props;
    return (
      <Layout>
        <SEO title="Home" description="Roy van Neden | Front-end Developer &amp; Shopify Expert"/>
        <Landing />
        {/* <Services/> */}
        <LatestPosts title="Laatst gepubliceerd" paragraph="Op mijn blog schrijf ik over dingen die ik interessant vind of geleerd heb." data={data.allMarkdownRemark.edges} />
        {/* <Highlights/> */}
        {/* <Banner title="Shopify - Aerial Theme" subtitle="Helemaal zelf ontworpen en ontwikkeld Ecommerce theme!" link_to="/blog/" link_text="Button text" /> */}
      </Layout>
    );    
  }

}

export default IndexPage;

export const query = graphql`
	{
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
	}
`;