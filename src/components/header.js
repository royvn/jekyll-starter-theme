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
			<header className="header">
				<div className="grid">
					<div className="d-flex align-items-center justify-content-between">
						<div className="branding">
							<p className="branding-title">
								<Link to="/">
									{this.props.siteTitle}
								</Link>
							</p>
						</div>
						<div className="d-flex flex-wrap">
							<button className="hamburger" onClick={this.handleHamburgerClick}>
								hamburger
								<span>
									<span></span>
									<span></span>			
									<span></span>
								</span>
							</button>
						</div>
					</div>
				</div>
				<Navigation isNavigationToggled={this.state.isNavigationToggled}/>
			</header>
		);
	}  
}

export default Header;