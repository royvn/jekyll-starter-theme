import React from "react";
import { Link } from "gatsby";

class Notice extends React.Component {

	constructor (props) {
		super(props);
	}

	render() {
		return (
			<Link to={ this.props.link } className="notice" activeClassName="notice--active">
				<div className="notice__content page-width page-spacer">
					<span className="notice__text">
						{ this.props.title }
					</span>
					<span className="notice__btn btn btn--light btn--sm">
						{ this.props.button_text }
					</span>
				</div>
			</Link>
		);
  }
  
}
	
export default Notice;
