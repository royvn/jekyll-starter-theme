import React from "react";
import { Link } from "gatsby";
// import PropTypes from "prop-types";

import Navigation from "./navigation";

class Header extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			isHome: true,
			isNavigationToggled: false
		}
		this.handleHamburgerClick = this.handleHamburgerClick.bind(this);
	}

	handleHamburgerClick() {
		this.setState({
			isNavigationToggled: !this.state.isNavigationToggled
		});
	}

	render() {
		return (
			<header className="header header--light">
				<div className="grid">
					<div className="branding">
						<p className="branding-title">
							<Link to="/">
								{this.props.siteTitle}
							</Link>
						</p>
					</div>

					<button onClick={this.handleHamburgerClick} className={`hamburger${this.state.isNavigationToggled ? ' hamburger--open' : ''}`}>
						<span>
							<span></span>
							<span></span>			
							<span></span>
						</span>
					</button>

				</div>
				<Navigation isNavigationToggled={this.state.isNavigationToggled}/>
			</header>
		);
	}  
}

export default Header;