import React from "react";
import { Link, graphql } from "gatsby";

class Landing extends React.Component {

  constructor (props) {
    super(props);
  }

  componentDidMount() {
    console.log('element mounted');
    document.addEventListener('mousemove', this.handleVisualInteraction);
    // document.querySelector('[data-link-type]').addEventListener('mouseover', this.handleVisualSwitch)
    //
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
    document.removeEventListener('mousemove', this.handleVisualInteraction);
    // clear what has been done inside componentDidMount
  }

  handleVisualInteraction(event) {
    let x = event.clientX;
    let y = event.clientY;
    let visual = document.querySelector('.visual');
    visual.setAttribute('style', `background-color: red; left: ${x}px; top: ${y}px`); 
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
      <div className="landing">

        <div className="visual">
          <div className="visual-item visual-item--active visual-home">
            Image 1
          </div>
          <div className="visual-item visual-info">
            Image 2
          </div>
          <div className="visual-item visual-blog">
            Image 3
          </div>
          <div className="visual-item visual-contact">
            Image 4
          </div>
          <div className="visual-item visual-code">
            Image 5
          </div>
        </div>

        <div className="container">
          <div className="row align-items-center">

            <div className="col-xs-12 col-md-6 col-lg-6">
              <div className="rte rte--lg">
                <p>
                  Hi, I'm Roy.
                </p>
                <p>
                  Frontend developer in The Hague, currently building awesome Shopify themes at <a href="https://www.code.nl" target="_blank" rel="noopener" onMouseOver={this.handleVisualSwitch} data-handle="code">CODE</a>.
                </p>
              </div>
            </div>

            <div className="col-xs-12 col-md-6 col-lg-4 offset-lg-2">
              <ul className="nav nav--primary rte rte--lg">
                <li className="nav-item">
                  <Link to="/" className="nav-link" activeClassName="nav-link--active" onMouseOver={this.handleVisualSwitch} data-handle="home">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/info/" className="nav-link" activeClassName="nav-link--active" onMouseOver={this.handleVisualSwitch} data-handle="info">
                    Info
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/blog/" className="nav-link" activeClassName="nav-link--active" onMouseOver={this.handleVisualSwitch} data-handle="blog">
                    Blog
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/contact/" className="nav-link" activeClassName="nav-link--active" onMouseOver={this.handleVisualSwitch} data-handle="contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

          </div>
        </div>

      </div>
    );
  }
}

export default Landing;