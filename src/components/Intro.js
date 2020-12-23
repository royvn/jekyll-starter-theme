import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import Typed from "typed.js";

import css from "./intro.module.scss";

class Intro extends React.Component {

  render() {
    return (
      <div className={`section ${css.intro}`}>
        <div className="container page-width page-spacer">
          <div className="row align-items-center">
            <div className="col-xs-12 col-lg-5">
              <div className={css.content}>
                {this.props.label &&
                  <p className="subtitle">
                    {this.props.label}
                  </p>
                }
                {this.props.title && 
                  <h1 className={`h1`}>
                    {this.props.title}
                  </h1>
                }
                {this.props.paragraph &&
                  <p className={`rte rte--lg ${css.paragraph}`}>
                    {this.props.paragraph}
                  </p>
                }
                <div className={`${css.buttons} buttons`}>
                  <Link to="/info/" className={`${css.button} button button--lg button--primary`}>
                    Meer over mij
                  </Link>
                  <Link to="/blog/" className={`${css.button} button button--lg button--secondary`}>
                    Naar blog
                  </Link>
                </div>

              </div>
            </div>
              
          </div>
        </div>
      </div>
    );
  }
}

export default Intro;