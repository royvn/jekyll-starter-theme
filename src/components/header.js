import React from "react";
import { Link } from "gatsby";
// import PropTypes from "prop-types";

import Navigation from "./navigation";

class Header extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			isHome: true,
			isHighlighted: false,
			isNavigationToggled: false
		}
		this.handleHamburgerClick = this.handleHamburgerClick.bind(this);
		this.handleHeaderHighlight = this.handleHeaderHighlight.bind(this);
	}

		
	handleHeaderHighlight(latestYScrollPosition) {
		
		let currentScrollYPosition = window.scrollY;

		if(currentScrollYPosition > 0) {
			this.setState({ 
				isHighlighted: true 
			});
		} else {
			this.setState({ 
				isHighlighted: false
			});
		}

	}

	componentDidMount() {
		let latestYScrollPosition = window.scrollY;
		window.addEventListener('scroll', this.handleHeaderHighlight);

	}
	
	handleHamburgerClick() {
		this.setState({
			isNavigationToggled: !this.state.isNavigationToggled
		});
	}

	render() {
		return (
			<header className={`header header--fixed ${this.state.isNavigationToggled ? 'navigation--open' : ''} ${this.state.isHighlighted ? 'header--highlighted' : ''}`}>
				<div className="header__bar">
					<div className="page-width page-spacer">

						<div className="brand">
							<Link to="/" className="brand-title">
								{this.props.siteTitle}
							</Link>
						</div>

						<button onClick={this.handleHamburgerClick} className={`hamburger${this.state.isNavigationToggled ? ' hamburger--open' : ''}`}>
								<span>
									<span></span>
									<span></span>			
									<span></span>
								</span>
							</button>

					</div>
				</div>
				<Navigation isNavigationToggled={this.state.isNavigationToggled} />
				<div className="header__mask"></div>
			</header>
		);
	}  
}

export default Header;