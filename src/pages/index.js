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
      <div>
        <SEO title="Home" description="Roy van Neden | Front-end Developer &amp; Shopify Expert"/>
        <Landing />
        {/* <Highlights/> */}
        {/* <Banner title="Shopify - Aerial Theme" subtitle="Helemaal zelf ontworpen en ontwikkeld Ecommerce theme!" button_text="Button text" button_to="/blog/" /> */}
        {/* <LatestPosts data={data.allMarkdownRemark.edges} /> */}
      </div>
    );    
  }

}

export default IndexPage;

export const query = graphql`
	{
		allMarkdownRemark(filter: {fileAbsolutePath: {regex: "content/posts/"}}, limit: 10, sort: {order: DESC, fields: frontmatter___date}) {
			edges {
				node {
					id
					frontmatter {
						title
            date(formatString: "DD MM YYYY")
            tags
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