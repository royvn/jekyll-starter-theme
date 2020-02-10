import React from "react";
import { Link } from "gatsby";
import Typed from "typed.js";

// import css from "./Hero.module.scss";

class Hero extends React.Component {

  componentDidMount() {
    let options = {
      strings: this.props.type,
      typeSpeed: 88,
      backSpeed: 48,
      loop: true,
      loopCount: Infinity,
    }
    // eslint-disable-next-line
    var typed = new Typed(".type", options);
  }

  handleMouseClick() {
		var target = document.getElementById('wat-ik-doe');
    target.scrollIntoView({
			behavior: 'smooth', // smooth scroll
			block: 'start' // the upper border of the element will be aligned at the top of the visible part of the window of the scrollable area.
    });
	}

  render() {
    const heroStyle ={
        backgroundImage: 'url(' + this.props.image +')'
    };
    return (
      <div className="hero hero--dark-mode" style={heroStyle}>
        <div className="grid">
          <div className="row">
            <div className="col-lg-8 ml-auto mr-auto text-md-center">
              <h1 className="hero__title">
                  {this.props.title} <span className="t-48">&mdash;</span>
                  <div>
                    <span className="type"></span> designer
                  </div>
              </h1>
              <p className="hero__paragrap">
                {this.props.paragraph}
              </p>
              <Link to="/over" className="btn btn--blue">
                  Meer over mij
              </Link>
            </div>
          </div>
        </div>
        <button type="button" className="mouse" onClick={this.handleMouseClick}>
          <span>
            Please scroll
          </span>
        </button>
      </div>
    );
  }
}

export default Hero;