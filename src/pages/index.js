import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import Hero from "../components/hero";
import SEO from "../components/seo";
import LatestPost from "../components/latest-post";

import image from "../images/hero.jpg";

class IndexPage extends React.Component {

  render() {
    const { data } = this.props;
    return (
      <Layout>
        <SEO title="Home"/>
        <Hero image={image} title="Roy van Neden" type={["front-end", "interaction", "UX", "UI"]} paragraph="Met plezier besteed ik het meeste van mijn tijd aan het ontwerpen, realiseren en verbeteren van digitale producten." />
        <section className="section dark-mode pb-5">
          <div className="grid pt-5">
            <div className="row pt-5 align-items-center">
              <div className="col-lg-6">
                <h2 className="headline-title">
                  Blog
                </h2>
                <p className="headline-paragraph">
                  Zo nu en dan deel ik op mijn blog dingen die ik interessant vind of geleerd hebt. Kijk gerust rond 🙈.
                </p>
              </div>
              <div className="col-lg-6 text-lg-right">
                <Link to="/over" className="btn btn--light">Alle artikelen</Link>
              </div>
            </div>
          </div>    
          <div className="latest-posts">
            {data.allMarkdownRemark.edges.map(({node}) => (
              <LatestPost key={node.id} node={node} />
            ))}
          </div>
        </section>
        <Link to="/blog/">Go to blog</Link>
      </Layout>
    );    
  }

}

export default IndexPage;

export const query = graphql`
	query MyLatestPosts {
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
	}
`;