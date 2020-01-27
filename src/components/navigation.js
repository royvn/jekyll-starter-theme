import React from "react";
import { Link } from "gatsby";

class Navigation extends React.Component {

	constructor (props) {
		super(props);
	}

	render() {

		return (
			<nav className={`navigation ${this.props.isNavigationToggled ? 'navigation--open' : ''}`}>
				<ul className="menu" id="primary-menu">
					<li className="menu-item">
						<Link to="/" className="menu-link" activeClassName="menu-link--active">
							Home
						</Link>
					</li>
					<li className="menu-item">
						<Link to="/about/" className="menu-link" activeClassName="menu-link--active">
							Over
						</Link>
					</li>
					<li className="menu-item">
						<Link to="/blog/" className="menu-link" activeClassName="menu-link--active">
							Blog
						</Link>
					</li>
					<li className="menu-item">
						<Link to="/contact/" className="menu-link" activeClassName="menu-link--active">
							Contact
						</Link>
					</li>
				</ul>
			</nav>
		);
	}
}
	
export default Navigation;