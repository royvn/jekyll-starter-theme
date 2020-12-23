import React from 'react';
import { StaticQuery } from 'gatsby';
import Img from "gatsby-image";

import SEO from '../components/Seo';

const linkPage = () => (
<div>
    <SEO title="Linktree" description="Recent gedeelde links." />    
    {/* <StaticQuery query={graphql`
      query {
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

          <Img fluid={data.image1.childImageSharp.fluid} alt="" style={{maxWidth: 300}} />
        
      )} /> */}
    <p>
      Rond Profiel/logo hier
    </p>
    <ul>
      <li>
        <a href="https://github.com/royvn" target="_blank" rel="noopener noreferrer">
          Github
        </a>
      </li> 
      <li>
        <a href="https://www.instagram.com/royvn/" target="_blank" rel="noopener noreferrer">
          Instagram
        </a>
      </li> 
      <li>
        <a href="https://www.linkedin.com/in/roy-van-neden-10549761/" target="_blank" rel="noopener noreferrer">
          Linkedin
        </a>
      </li> 
      <li>
        <a href="https://roy.vanneden.nl" target="_blank" rel="noopener noreferrer">
          Website
        </a>
      </li> 
    </ul>  
  </div>
);

export default linkPage;