import React from "react";
import { Link } from "gatsby";

class Navigation extends React.Component {

	constructor (props) {
		super(props);
	}

	render() {

		return (
			<nav className={`navigation ${this.props.isNavigationToggled ? 'navigation--open' : ''}`}>
				<div className="grid page-width page-spacer">
					<div className="grid__item gcs-xs-1 gce-xs-13 gcs-md-1 gce-md-7">
						<div className="nav-group">
							<span className="nav-group-title">
								Menu
							</span>
							<ul className="nav">
								<li className="nav-item">
									<Link to="/" className="nav-link" activeClassName="nav-link--active">
										Home
									</Link>
								</li>
								<li className="nav-item">
									<Link to="/about/" className="nav-link" activeClassName="nav-link--active">
										Over
									</Link>
								</li>
								<li className="nav-item">
									<Link to="/blog/" className="nav-link" activeClassName="nav-link--active">
										Blog
									</Link>
								</li>
								<li className="nav-item">
									<Link to="/contact/" className="nav-link" activeClassName="nav-link--active">
										Contact
									</Link>
								</li>
							</ul>
						</div>
					</div>
					<div className="grid__item gcs-xs-1 gce-xs-13 gcs-md-7 gce-md-13">
						<div className="nav-group">
							<span className="nav-group-title">
								Social
							</span>
							<ul className="nav social">
								<li className="nav-item">
									<a href="https://github.com/royvn" target="_blank" rel="noopener noreferrer" className="nav-link">
										Github
									</a>
								</li>
								<li className="nav-item">
									<a href="https://www.instagram.com/royvn/" target="_blank" rel="noopener noreferrer" className="nav-link">
										Instagram
									</a>
								</li>
								<li className="nav-item">
									<a href="https://www.linkedin.com/in/roy-van-neden-10549761/" target="_blank" rel="noopener noreferrer" className="nav-link">
										Linkedin
									</a>
								</li>
								<li className="nav-item">
									<a href="https://twitter.com/royvn_" target="_blank" rel="noopener noreferrer" className="nav-link">
										Twitter
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>	
			</nav>
		);
	}
}
	
export default Navigation;