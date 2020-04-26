import React from "react";

function ToolkitHeadline(props) {
	return (
    <div className="toolkit page-header">
			<div className="page-width page-spacer grid">
        <div className="grid__item gcs-xs-1 gce-xs-13 gcs-md-1 gce-md-10 gcs-lg-1 gce-lg-9">
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

export default ToolkitHeadline;