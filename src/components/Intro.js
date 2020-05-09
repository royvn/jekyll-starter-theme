import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import Typed from "typed.js";

import css from "./intro.module.scss";

class Intro extends React.Component {

  render() {
    return (
      <div className={`toolkit ${css.intro}`}>
        <div className="grid page-width page-spacer align-items-center">
          <div className="grid__item gcs-xs-1 gce-xs-13 gcs-md-1 gce-md-7">
            <Img fluid={this.props.image} alt="Dit ben ik" style={{maxWidth: 1000}} />
          </div>
          <div className="grid__item gcs-xs-1 gce-xs-13 gcs-md-7 gce-md-13">
            <div className={css.content}>
              <p className={css.label}>
                {this.props.label}
              </p>
              <h1 className={css.title}>
                <span>
                  <span className={css.opacity}>
                    Hallo daar
                  </span>
                  <span className={css.hand}>
                    {this.props.emoji}
                  </span>
                </span>
                Ik ben Roy!
              </h1>
              <p className={`${css.paragraph}`}>
                {this.props.paragraph}
              </p>
              <Link to="/info/" className="btn btn--primary">
                Meer over mij
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Intro;