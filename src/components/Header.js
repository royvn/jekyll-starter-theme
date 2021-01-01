import React from "react";
import { Link, StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import Notice from "./Notice";

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
		this.handleCloseAnimation = this.handleCloseAnimation.bind(this);
	}
		
	handleHeaderHighlight() {
		
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
		window.addEventListener('scroll', this.handleHeaderHighlight);
	}
	
	handleHamburgerClick() {
		this.setState({
			isNavigationToggled: !this.state.isNavigationToggled
		});
	}
	
	handleCloseAnimation(){
		this.setState({
			isNavigationToggled: false
		});
	}

	render() {
		return (
			<StaticQuery query={graphql`
			query {
				logo: file(relativePath: {eq: "royvn.jpg"}) {
					childImageSharp {
						fluid(maxWidth: 48, quality: 100) {
							...GatsbyImageSharpFluid_withWebp
						}
					}
				}
			}
			`} render={data => (
				<header className={`header ${this.state.isNavigationToggled ? 'navigation--open' : ''} ${this.state.isHighlighted ? 'header--highlighted' : ''}`}>
					<Notice title="Verbeter de weergave van je productinformatie in Shopify" link="/blog/verbeter-de-weergave-van-je-productinformatie-in-shopify/" />
					<div className="bar">
						<div className="bar__content page-width page-spacer">
							<div className="bar__content__item">
								{this.props.siteTitle && 
									<Link to="/">
										<span className="sr-only">
											{this.props.siteTitle}
										</span>
										<div className="me">
											<Img fluid={data.logo.childImageSharp.fluid} />
										</div>
									</Link>
								}
							</div>	
							<div className="bar__content__item">
								{/* <button type="button" onClick={this.handleHamburgerClick} className={`hamburger`}>
									Menu
								</button> */}
								<nav className={`navigation ${this.state.isNavigationToggled ? 'navigation--open' : ''}`}>
									<ul className="nav nav--primary">
										<li className="nav-item" data-hover-type="home">
											<Link to="/" className="nav-link" activeClassName="nav-link--active">
												Home
											</Link>
										</li>
										<li className="nav-item" data-hover-type="info">
											<Link to="/info/" className="nav-link" activeClassName="nav-link--active">
												Info
											</Link>
										</li>
										<li className="nav-item" data-hover-type="blog">
											<Link to="/blog/" className="nav-link" activeClassName="nav-link--active">
												Blog
											</Link>
										</li>
										<li className="nav-item" data-hover-type="contact">
											<Link to="/contact/" className="nav-link" activeClassName="nav-link--active">
												Contact
											</Link>
										</li>
									</ul>
								</nav>
							</div>	
							<div className="bar__content__item">
								<div className="action-buttons">
									<button type="button" className="action-buttons__item">
										<span className="sr-only">
											Social media
										</span>
										<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>
									</button>
								</div>	
							</div>	
							
						</div>
					</div>
				</header>
			)}/>
		);
	}  
}

export default Header;