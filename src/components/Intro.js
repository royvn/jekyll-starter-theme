import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import Typed from "typed.js";

import css from "./intro.module.scss";

class Intro extends React.Component {

  render() {
    return (
      <div className={`section section--margin ${css.intro}`}>
        <div className="container page-spacer">
          <div className="row align-items-center">
            <div className="col-12 col-md-6">
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
                  <p className={`rte`}>
                    {this.props.paragraph}
                  </p>
                }
              </div>
            </div>
            {/* <div className="col-12 col-lg-5">
              {this.props.totalPosts &&
              <div className="rte rte--lg text-right">
                {this.props.totalPosts}
              </div>}
            </div>   */}
          </div>
        </div>
      </div>
    );
  }

}

export default Intro;