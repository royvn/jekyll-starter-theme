import React from 'react';
import {Link} from 'gatsby';
import Img from "gatsby-image";

import css from "./footer.module.scss";

function Outro(props) {
  return (
    <div className="container page-width page-spacer">
      <div className={` ${css.row} row`}>
        <div className="col-xs-12 col-md-6 col-lg-5">
          <div className={css.content}>
            
            {props.subtitle && 
              <p className="subtitle subtitle--primary">
                {props.subtitle}
              </p>
            }

            {props.title && 
              <h2 className="h3">
                { props.title }
              </h2>
            }

            {props.paragraph && 
              <p className={`${css.paragraph}`}>
                {props.paragraph}
              </p>
            }

            {props.link_to && props.link_text || props.button_href && props.button_text &&
              <div className={`${css.buttons} buttons`}>

                {props.link_to && props.link_text &&
                  <Link to={props.link_to} className="button button--primary button--lg">
                    {props.link_text}
                  </Link>
                }
  
                {props.button_href && props.button_text &&
                  <a href={props.button_href} rel="noopener noreferrer" className="button button--primary button--lg">
                    {props.button_text}
                  </a>
                }

              </div>
            }

          </div>
        </div>
        <div className="col-xs-12 col-md-6 col-lg-7">
          <div className="row">
            <div className="col-6">
              {props.image_1 &&
                <Img fluid={props.image_1} alt="" style={{maxWidth: 1000}} />
              }
            </div>
            <div className="col-6">
              {props.image_2 &&
                <Img fluid={props.image_2} alt="" style={{maxWidth: 1000}} />
              }
            </div>
          </div> 
        </div>
      </div>
    </div>
  );
}

export default Outro;