import React from 'react';
import css from "./footer.module.scss"; // todo split files

function Outro(props) {
  return (
    <div className="container page-width page-spacer">
      <div className="row">
        <div className="col-xs-12 col-md-6 col-lg-6">
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

            {props.button_mailto && props.button_text &&
              <a href={`mailto:${props.button_mailto}`} className="button button--primary button--lg">
                {props.button_text}
              </a>
            }

          </div>
        </div>
        <div className="col-xs-12 col-md-6">
          <p>
            image image
          </p>
        </div>
      </div>
    </div>
  );
}

export default Outro;