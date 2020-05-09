import React from "react";
import { Link } from "gatsby";
import Typed from "typed.js";

class Hero extends React.Component {

  componentDidMount() {
    let options = {
      strings: this.props.type,
      typeSpeed: 48,
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
        <div className="grid page-width page-spacer">
          <div className="grid__item gcs-xs-1 gce-xs-13 gcs-lg-3 gce-lg-11 text-center">
            <h1 className="hero__title">
              {this.props.title} <span className="t-48">&mdash;</span>
              <div>
                <span className="type"></span>
              </div>
            </h1>
            <p className="hero__paragraph">
              {this.props.paragraph}
            </p>
            <button type="submit" className="mouse" onClick={this.handleMouseClick}>
              <span className="sr-only">
                Scroll verder
              </span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;
