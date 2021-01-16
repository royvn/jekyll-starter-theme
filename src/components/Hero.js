import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import Typed from "typed.js";

import css from "./hero.module.scss";

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

    return (
      <div className={`${css.hero} ${css.heroDarkMode}`}>
        {this.props.image && 
          <Img 
            fluid={this.props.image} 
            alt={this.props.image_alt} 
            className={css.image} 
            imgStyle={{backgroundColor: 'orange'}}
            backgroundColor={{backgroundColor: 'purple'}}
            placeholderStyle={{paddingBottom: 0, backgroundColor: 'red'}} 
            style={{position:'absolute'}} 
            />
        }
        <div className="container page-spacer">
          <div className="row text-center">
            <div className="col-12 col-md-12">
              {this.props.title &&
                <h1 className={css.title}>
                  {this.props.title} <span className="t-48">&mdash;</span>
                  <div>
                    <span className="type"></span>
                  </div>
                </h1>
              }
              {this.props.paragraph && 
                <p className={css.paragraph}>
                  {this.props.paragraph}
                </p>
              }
              <button type="button" className={css.mouse} onClick={this.handleMouseClick}>
                <span className="sr-only">
                  Scroll verder
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;
