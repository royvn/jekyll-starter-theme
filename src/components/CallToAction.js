import React from "react";
import { Link } from "gatsby";

function CallToAction(props) {
	return (
    <div className="">
			<div className="grid">
        <div className="grid__item">
          <h2 className="">
            Title
          </h2>
          <p className="">
            Paragraph
          </p>
          <Link to="/contact/" className="btn btn--blue">
            Button
          </Link>
        </div>
			</div>
		</div>
	);
}

export default CallToAction;