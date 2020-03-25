import React from "react";

function PageHeader(props) {
	return (
    <div className="section page-header">
			<div className="page-width page-spacer grid">
        <div className="grid__item gcs-xs-1 gce-xs-13">
          <h1 className="page-header__title">
            {props.title}
          </h1>
          <h2 className="page-header__subtitle">
            {props.subtitle}
          </h2>
        </div>
			</div>
		</div>
	);
}

export default PageHeader;