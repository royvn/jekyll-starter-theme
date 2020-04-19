import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";

import image_tab_1 from "../uploads/tab-1.png";
import image_tab_2 from "../uploads/tab-2.png";
import image_tab_3 from "../uploads/tab-3.png";

class TabsWithImage extends React.Component {

	constructor (props) {
    super(props);
    this.state = {
			activeTab: 'tab-1'
		}
  }
  
  handleTab(e) {
    console.log(e);
  }

	render() {
		return (
			<div className="grid page-width page-spacer align-items-center">
        <div className="grid__item gcs-xs-1 gce-xs-13 gcs-lg-1 gce-lg-6">
          <ul className="nav presentation-tab" id="tab">
            <li>
              <a href="#tab-1-target" id="tab-1" onClick={this.handleTab}>
                <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="gem" className="svg-inline--fa fa-gem fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M464 0H112c-4 0-7.8 2-10 5.4L2 152.6c-2.9 4.4-2.6 10.2.7 14.2l276 340.8c4.8 5.9 13.8 5.9 18.6 0l276-340.8c3.3-4.1 3.6-9.8.7-14.2L474.1 5.4C471.8 2 468.1 0 464 0zm-19.3 48l63.3 96h-68.4l-51.7-96h56.8zm-202.1 0h90.7l51.7 96H191l51.6-96zm-111.3 0h56.8l-51.7 96H68l63.3-96zm-43 144h51.4L208 352 88.3 192zm102.9 0h193.6L288 435.3 191.2 192zM368 352l68.2-160h51.4L368 352z"></path></svg>
                <div>
                  <h4>
                    Interaction design
                  </h4>
                  <p className="t-64">
                    Achterhalen van doelen en gebruikersbehoeften. Navigatie, informatie en interface ontwerpen.
                  </p>
                </div>
              </a>
            </li>
            <li>
              <a href="#tab-2-target" id="tab-2" onClick={this.handleTab}>
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="vector-square" className="svg-inline--fa fa-vector-square fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M512 128V32c0-17.67-14.33-32-32-32h-96c-17.67 0-32 14.33-32 32H160c0-17.67-14.33-32-32-32H32C14.33 0 0 14.33 0 32v96c0 17.67 14.33 32 32 32v192c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h96c17.67 0 32-14.33 32-32h192c0 17.67 14.33 32 32 32h96c17.67 0 32-14.33 32-32v-96c0-17.67-14.33-32-32-32V160c17.67 0 32-14.33 32-32zm-96-64h32v32h-32V64zM64 64h32v32H64V64zm32 384H64v-32h32v32zm352 0h-32v-32h32v32zm-32-96h-32c-17.67 0-32 14.33-32 32v32H160v-32c0-17.67-14.33-32-32-32H96V160h32c17.67 0 32-14.33 32-32V96h192v32c0 17.67 14.33 32 32 32h32v192z"></path></svg>
                <div>
                  <h4>
                    Visual design 
                  </h4>
                  <p className="t-64">
                    Grafische weergave met passende look-and-feel.
                  </p>
                </div>
              </a>
            </li>
            <li>
              <a href="#tab-3-target" className="active" id="tab-3" onClick={this.handleTab}>
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="shapes" className="svg-inline--fa fa-shapes fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M512 320v160c0 17.67-14.33 32-32 32H320c-17.67 0-32-14.33-32-32V320c0-17.67 14.33-32 32-32h160c17.67 0 32 14.33 32 32zm-384-64C57.31 256 0 313.31 0 384s57.31 128 128 128 128-57.31 128-128-57.31-128-128-128zm351.03-32c25.34 0 41.18-26.67 28.51-48L412.51 16c-12.67-21.33-44.35-21.33-57.02 0l-95.03 160c-12.67 21.33 3.17 48 28.51 48h190.06z"></path></svg>
                <div>
                  <h4>
                    Front-end development
                  </h4>
                  <p className="t-64">
                    Realisatie middels html, scss, js en meer naar templates van verschillende content management systemen.
                  </p>
                </div>
              </a>
            </li>
          </ul>
        </div>
        <div className="grid__item gcs-xs-1 gce-xs-13 gcs-lg-7 gce-lg-13">
          <div className="tab-content" id="tabContent">
            <div className={`tab-pane ${this.state.activeTab === 'tab-1' ? 'active' : ''}`} id="tab-1-target" role="tabpanel" aria-labelledby="tab-1">
              <img src={image_tab_1} alt="Interaction design" className="img-fluid w-100" />
            </div>
            <div className={`tab-pane ${this.state.activeTab === 'tab-2' ? 'active' : ''}`} id="tab-2-target" role="tabpanel" aria-labelledby="tab-2">
              <img src={image_tab_2} alt="Visual design" className="img-fluid w-100" />
            </div>
            <div className={`tab-pane ${this.state.activeTab === 'tab-3' ? 'active' : ''}`} id="tab-3-target" role="tabpanel" aria-labelledby="tab-3">
              <img src={image_tab_3} alt="Front-end development" className="img-fluid w-100" />
            </div>
          </div>
        </div>
      </div>
		);
  }
  
}
	
export default TabsWithImage;