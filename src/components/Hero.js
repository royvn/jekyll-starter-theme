import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import Typed from "typed.js";

import css from "./hero.module.scss";

class Hero extends React.Component {

  componentDidMount() {
  }

  handleMouseClick() {
	}

  render() {

    return (
      <div className={`${css.hero} ${css.heroDarkMode}`}>
        {this.props.image && 
          <Img 
            fluid={this.props.image} 
            alt={this.props.image_alt} 
            className={css.image} 
            placeholderStyle={{paddingBottom: 0}} 
            style={{position:'absolute'}} 
            />
        }
        <div className="container page-spacer">
          <div className="row text-center">
            <div className="col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
              {this.props.subtitle &&
                <p className={`subtitle`}>
                  {this.props.subtitle}
                </p>
              }
              {this.props.title &&
                <h1 className={css.title}>
                  {this.props.title}
                </h1>
              }
              {this.props.paragraph && 
                <p className="rte rte--lg">
                  {this.props.paragraph}
                </p>
              }

              {((this.props.primary_link_to && this.props.primary_link_text) && (this.props.secondary_link_to && this.props.secondary_link_text)) &&
                <div className={`buttons ${css.buttons}`}>
                  {(this.props.primary_link_to && this.props.primary_link_text) &&
                    <Link to={this.props.primary_link_to} className="button">
                      {this.props.primary_link_text}
                    </Link>
                  }
                  {(this.props.secondary_link_to && this.props.secondary_link_text) &&
                    <Link to={this.props.secondary_link_to} className="button button--secondary">
                      {this.props.secondary_link_text}
                    </Link>
                  }
                </div> 
              }

              {/* <button type="button" className={css.mouse} onClick={this.handleMouseClick}>
                <span className="sr-only">
                  Scroll verder
                </span>
              </button> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;
