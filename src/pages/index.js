import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/Layout";
import Hero from "../components/Hero";
import SEO from "../components/Seo";
import LatestPost from "../components/LatestPost";
import Notice from '../components/Notice';
import TabsWithImage from '../components/Tabs';

import image from "../images/hero.jpg";
import imageFloat1 from "../images/project-1.jpg";
import imageFloat2 from "../images/project-2.jpg";
import imageFloat3 from "../images/project-3.jpg";
import imageFloat4 from "../images/project-4.jpg";

class IndexPage extends React.Component {

  render() {
    const { data } = this.props;
    return (
      <Layout>
        
        <SEO title="Home" description="Roy van Neden - Front-end developer, Shopify developer &amp; UX/UI designer in regio Den Haag"/>
        <Hero image={image} title="Roy van Neden" type={["front-end developer", "Shopify developer", "UX/UI designer"]} paragraph="Met plezier besteed ik mijn tijd aan het ontwerpen, realiseren en verbeteren van digitale producten." />

        {/* <section className="toolkit">
          <div className="grid page-width page-spacer align-items-center">
            <div className="grid__item gcs-xs-1 gce-xs-13 gcs-lg-4 gce-lg-10 text-center">
              <p className="headline-subtitle">
                Wat ik doe
              </p>
              <h2 className="headline-title">
                Van concept tot realisatie
              </h2>
            </div>
          </div>    
          <TabsWithImage />
        </section> */}

        <section className="toolkit toolkit--dark-mode">
          <div className="grid page-width page-spacer align-items-center">
            <div className="grid__item gcs-xs-1 gce-xs-13 gcs-lg-4 gce-lg-10 text-center">
              <h2 className="headline-title">
                Blog
              </h2>
              <p className="headline-paragraph">
                Zo nu en dan deel ik op mijn blog dingen die ik interessant vind of geleerd hebt. Kijk gerust rond <span role="img">🙈</span>.
              </p>
              <Link to="/blog/" className="btn btn--light">Alle artikelen</Link>
            </div>
          </div>    
          <div className="latest-posts">
            {data.allMarkdownRemark.edges.map(({node}) => (
              <LatestPost key={node.id} node={node} />
            ))}
          </div>
        </section>
        
        <section className="toolkit">
          <div className="grid page-width page-spacer align-items-center">
            <div className="grid__item gcs-xs-1 gce-xs-13 text-center">
              <h2 className="headline-title">
                Een selectie van projecten
              </h2>
              <span className="btn btn--blue btn--disabled">Binnenkort online</span>
            </div>
          </div>    
          <div className="floating-projects">
          <div className="row custom-row">
            <div>
              <img src={imageFloat1} alt="Project screenshot 1" className="img-fluid w-100" />
            </div>
            <div>
              <img src={imageFloat2} alt="Project screenshot 2" className="img-fluid w-100" />
            </div>
            <div>
              <img src={imageFloat3} alt="Project screenshot 3" className="img-fluid w-100" />
            </div>
            <div>
              <img src={imageFloat4} alt="Project screenshot 4" className="img-fluid w-100" />
            </div>
            <div>
              <img src={imageFloat1} alt="Project screenshot 5" className="img-fluid w-100" />
            </div>
          </div>
          </div>
        </section>

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
	}
`;