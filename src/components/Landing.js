import React from "react";
import { Link, graphql, StaticQuery } from "gatsby";
import Img from "gatsby-image";
class Landing extends React.Component {

  constructor (props) {
    super(props);
  }

  componentDidMount() {
    console.log('element mounted');
    document.addEventListener('mousemove', this.handleVisualInteraction);
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
    document.removeEventListener('mousemove', this.handleVisualInteraction);
  }

  handleVisualInteraction(event) {
    let x = event.clientX;
    let y = event.clientY;
    let visual = document.querySelector('.visual');
    visual.setAttribute('style', `left: ${x}px; top: ${y}px`); 
  }

  handleVisualSwitch(event) {
    let handle = event.target.dataset.handle;
    document.querySelectorAll(`.visual-item`).forEach((element) => {
      element.classList.remove('visual-item--active');
    });
    document.querySelector(`.visual-${handle}`).classList.add('visual-item--active');
  }

  render() {
    return(


      <StaticQuery query={graphql`
      query {
        landing1: file(relativePath: {eq: "landing-1.png"}) {
          id
          childImageSharp {
            fluid(maxWidth: 1000, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        landing2: file(relativePath: {eq: "landing-2.png"}) {
          id
          childImageSharp {
            fluid(maxWidth: 1000, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        landing3: file(relativePath: {eq: "landing-3.png"}) {
          id
          childImageSharp {
            fluid(maxWidth: 1000, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        landing4: file(relativePath: {eq: "landing-4.png"}) {
          id
          childImageSharp {
            fluid(maxWidth: 1000, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        landing5: file(relativePath: {eq: "landing-5.png"}) {
          id
          childImageSharp {
            fluid(maxWidth: 1000, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
      `} render={data => (
        <div className="landing">

          <div className="visual">
            <div className="visual-item visual-item--active visual-home">
              <Img fluid={data.landing1.childImageSharp.fluid} style={{maxWidth: 1000}} />
            </div>
            <div className="visual-item visual-info">
              <Img fluid={data.landing2.childImageSharp.fluid} style={{maxWidth: 1000}} />
            </div>
            <div className="visual-item visual-the-hague">
              <Img fluid={data.landing3.childImageSharp.fluid} style={{maxWidth: 1000}} />
            </div>
            <div className="visual-item visual-shopify">
              <Img fluid={data.landing4.childImageSharp.fluid} style={{maxWidth: 1000}} />
            </div>
            <div className="visual-item visual-code">
              <Img fluid={data.landing5.childImageSharp.fluid} style={{maxWidth: 1000}} />
            </div>
          </div>

          <div className="container page-spacer">
            <div className="row align-items-center">

              <div className="col-12 col-md-6 offset-md-3 col-lg-8 offset-lg-2 text-center">
                <div className="h2">
                  <p>
                    Hi, I'm <Link to="/info/" onMouseOver={this.handleVisualSwitch} data-handle="info">Roy</Link>, located in <a onMouseOver={this.handleVisualSwitch} data-handle="the-hague">The Hague</a>, building awesome <a href="https://www.shopify.nl" target="_blank" rel="noopener noreferrer" onMouseOver={this.handleVisualSwitch} data-handle="shopify">Shopify</a> themes at <a href="https://www.code.nl" target="_blank" rel="noopener noreferrer" onMouseOver={this.handleVisualSwitch} data-handle="code">CODE</a>.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>

        )} />

    );
  }
}

export default Landing;