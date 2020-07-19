import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Intro from "../components/Intro";

import SEO from "../components/Seo";
import LatestPost from "../components/LatestPost";

import TabsWithImage from '../components/Tabs';

class IndexPage extends React.Component {

  render() {
    const { data } = this.props;
    return (
      <Layout>
        <SEO title="Home" description="Roy van Neden - Front-end developer, Shopify developer &amp; UX/UI designer in regio Den Haag"/>
        <Intro image={data.image.childImageSharp.fluid} label="Intro" title="" emoji="👋" paragraph="Front-end developer, Shopify theme developer, UX/UI designer &amp; meer."/>

        <div className="toolkit">
          <div className="grid page-width page-spacer align-items-center">
            <div className="grid__item gcs-xs-1 gce-xs-13 gcs-lg-4 gce-lg-10 text-center">
              <h2 className="headline-title">
                Blog
              </h2>
              <p className="headline-paragraph">
                Zo nu en dan deel ik op mijn blog dingen die ik interessant vind of geleerd hebt. Kijk gerust rond <span role="img">🙈</span>.
              </p>
              <Link to="/blog/" className="button button--lg button--light">Alle artikelen</Link>
            </div>
          </div>    
          <div className="latest-posts">
            {data.allMarkdownRemark.edges.map(({node}) => (
              <LatestPost key={node.id} node={node} />
            ))}
          </div>
        </div>

      </Layout>
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
        fluid(maxWidth: 1000, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
	}
`;