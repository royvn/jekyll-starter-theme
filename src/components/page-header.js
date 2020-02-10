import React from "react";

function PageHeader(props) {
	return (
    <header className="page-header">
			<div className="grid">
        <div className="grid__item gc-3-8">
          <h1 className="page-header__title">
            {props.title}
          </h1>
          <h2 className="page-header__subtitle">
            {props.subtitle}
          </h2>
        </div>
			</div>
		</header>
	);
}

export default PageHeader;