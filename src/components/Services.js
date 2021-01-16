import React from "react";
import {Link} from "gatsby";
import css from "./services.module.scss";

class Services extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="section">
        <div className="container page-spacer">
          <div className="row">
            <div className="col-xs-12 col-md-6 col-lg-4">
              <div className={`${css.service}`}>
                <div className={`${css.icon}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><g><rect fill="none" height="24" width="24"/></g><g><g/><g><path d="M20.97,7.27c0.39-0.39,0.39-1.02,0-1.41l-2.83-2.83c-0.39-0.39-1.02-0.39-1.41,0l-4.49,4.49L8.35,3.63 c-0.78-0.78-2.05-0.78-2.83,0l-1.9,1.9c-0.78,0.78-0.78,2.05,0,2.83l3.89,3.89L3,16.76V21h4.24l4.52-4.52l3.89,3.89 c0.95,0.95,2.23,0.6,2.83,0l1.9-1.9c0.78-0.78,0.78-2.05,0-2.83l-3.89-3.89L20.97,7.27z M5.04,6.94l1.89-1.9c0,0,0,0,0,0 l1.27,1.27L7.02,7.5l1.41,1.41l1.19-1.19l1.2,1.2l-1.9,1.9L5.04,6.94z M16.27,14.38l-1.19,1.19l1.41,1.41l1.19-1.19l1.27,1.27 l-1.9,1.9l-3.89-3.89l1.9-1.9L16.27,14.38z M6.41,19H5v-1.41l9.61-9.61l1.3,1.3l0.11,0.11L6.41,19z M16.02,6.56l1.41-1.41 l1.41,1.41l-1.41,1.41L16.02,6.56z"/></g></g></svg>
                </div>
                <div>
                  <h3 className={`h5 ${css.title}`}>
                    UX & webdesign
                  </h3>
                  <p className="rte rte--md">
                    Van een fijne navigatie en interactie tot een geheel design componenten systeem met een focus op ecommerce.
                  </p>
                  <Link to="/" className="button button--primary button--sm">
                    Meer info
                  </Link>
                </div> 
              </div>
            </div>
            <div className="col-xs-12 col-md-6 col-lg-4">
              <div className={`${css.service}`}>
                <div className={`${css.icon}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h34v24H0V0z" fill="none"/><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/></svg>
                </div>
                <div>
                  <h3 className={`h5 ${css.title}`}>Shopify Theme Development</h3>
                  <p className="rte rte--md">
                    Je eigen unieke geoptimaliseerde Shopify Theme met support en doorontwikkeling.
                  </p>
                  <Link to="/" className="button button--primary button--sm">
                    Meer info
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-md-6 col-lg-4">
              <div className={`${css.service}`}>
                <div className={`${css.icon}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h34v24H0V0z" fill="none"/><path d="M19 6h-2c0-2.76-2.24-5-5-5S7 3.24 7 6H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-7-3c1.66 0 3 1.34 3 3H9c0-1.66 1.34-3 3-3zm7 17H5V8h14v12zm-7-8c-1.66 0-3-1.34-3-3H7c0 2.76 2.24 5 5 5s5-2.24 5-5h-2c0 1.66-1.34 3-3 3z"/></svg>
                </div>
                <div>
                  <h3 className={`h5 ${css.title}`}>Online Shopify cursus (coming soon)</h3>
                  <p className="rte rte--md">
                    Doorloop en leer in je eigen tempo hoe je met Shopify aan de slag kan gaan!
                  </p>
                  <Link to="/" className="button button--primary button--sm">
                    Meer info
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

export default Services;