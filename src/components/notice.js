import React from "react";
import { Link } from "gatsby";

class Notice extends React.Component {

	constructor (props) {
		super(props);
	}

	render() {
		return (
			<div className="notice">
        <Link to={ this.props.link } className="notice__item" activeClassName="notice__item--active">
          { this.props.title }
        </Link>
			</div>
		);
  }
  
}
	
export default Notice;