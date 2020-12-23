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
    console.log('this', this);
    console.log('event.target', event.target);
    console.log(event.target);
    // dataLinkType.nodeValue
  }

  render() {
    return(
      <div className="landing">

        <div className="visual">
          <div className="">
            Picture me
          </div>
          <div></div>
          <div></div>
        </div>

        <div className="container">
          <div className="row align-items-center">

            <div className="col-xs-12 col-md-6 col-lg-6">
              <div className="rte rte--lg">
                <p>
                  Hi, I'm Roy.
                </p>
                <p>
                  Frontend developer in The Hague, currently building Shopify themes at <a href="https://www.code.nl" target="_blank" rel="noopener">CODE</a>!
                </p>
              </div>
            </div>

            <div className="col-xs-12 col-md-6 col-lg-4 offset-lg-2">
              <ul className="nav nav--primary rte rte--lg">
                <li className="nav-item" data-link-type="home" onMouseOver={this.handleVisualSwitch}>
                  <Link to="/" className="nav-link" activeClassName="nav-link--active">
                    Home
                  </Link>
                </li>
                <li className="nav-item" data-link-type="info">
                  <Link to="/info/" className="nav-link" activeClassName="nav-link--active" onMouseOver={this.handleVisualSwitch}>
                    Info
                  </Link>
                </li>
                <li className="nav-item" data-link-type="blog">
                  <Link to="/blog/" className="nav-link" activeClassName="nav-link--active" onMouseOver={this.handleVisualSwitch}>
                    Blog
                  </Link>
                </li>
                <li className="nav-item" data-link-type="contact">
                  <Link to="/contact/" className="nav-link" activeClassName="nav-link--active" onMouseOver={this.handleVisualSwitch}>
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