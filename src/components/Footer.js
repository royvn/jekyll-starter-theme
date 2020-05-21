import React from "react";
import { Link, StaticQuery, graphql } from "gatsby";

import WidgetList from "./WidgetList";

class Footer extends React.Component {

	// constructor(props) {
	// 	super(props);
	// }

	render() {
		const { data } = this.props;
		return (
			<StaticQuery query={graphql`
				query {
					allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}, limit: 5) {
						edges {
							node {
								id
								fields {
									slug
								}
								frontmatter {
									title
								}
							}
						}
					}
				}
				`} render={data => (
					<footer className="footer">
						<div className="footer__widgets grid page-width page-spacer">
							<div className="grid__item gcs-xs-1 gce-xs-13 gcs-md-1 gce-md-4">
								<div className="widget">
									<p className="widget-title">
										{this.props.siteTitle}
									</p>		
								</div>
							</div>
							<div className="grid__item gcs-xs-1 gce-xs-7 gcs-md-4 gce-md-7">
								<div className="widget">
									<p className="widget-title">
										Hoofdmenu
									</p>
									<ul className="widget-list">
										<li className="widget-list-item">
											<Link to="/" className="widget-list-link" activeClassName="widget-list-link--active">
												Home
											</Link>
										</li>
										<li className="widget-list-item">
											<Link to="/info/" className="widget-list-link" activeClassName="widget-list-link--active">
												Info
											</Link>
										</li>
										<li className="widget-list-item">
											<Link to="/blog/" className="widget-list-link" activeClassName="widget-list-link--active">
												Blog
											</Link>
										</li>
										<li className="widget-list-item">
											<Link to="/contact/" className="widget-list-link" activeClassName="widget-list-link--active">
												Contact
											</Link>
										</li>
									</ul>
								</div>
							</div>
							<div className="grid__item gcs-xs-8 gce-xs-13 gcs-md-7 gce-md-10">
								<div className="widget">
									<p className="widget-title">
										Social
									</p>
									<ul className="widget-list">
										<li className="widget-list-item">
											<a href="https://github.com/royvn" target="_blank" rel="noopener noreferrer" className="widget-list-link">
												Github
											</a>
										</li>
										<li className="widget-list-item">
											<a href="https://www.instagram.com/royvn/" target="_blank" rel="noopener noreferrer" className="widget-list-link">
												Instagram
											</a>
										</li>
										<li className="widget-list-item">
											<a href="https://www.linkedin.com/in/roy-van-neden-10549761/" target="_blank" rel="noopener noreferrer" className="widget-list-link">
												Linkedin
											</a>
										</li>
										<li className="widget-list-item">
											<a href="https://twitter.com/royvn_" target="_blank" rel="noopener noreferrer" className="widget-list-link">
												Twitter
											</a>
										</li>
									</ul>
								</div>
							</div>
							<div className="grid__item gcs-xs-1 gce-xs-13 gcs-md-10 gce-md-13">
								<WidgetList title="Recent van blog" list={data.allMarkdownRemark.edges} />
							</div>
						</div>
						<div className="footer__license">
							<div className="grid page-width page-spacer">
								<div className="grid__item gcs-xs-1 gce-xs-13">
									<p>
										© 1992 - {new Date().getFullYear()}, Built with
										{` `}
										<a href="https://www.gatsbyjs.org" target="_blank" rel="noopener noreferrer">
										Gatsby
										</a> and {` `} 
										<a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
										React
										</a>
										.
										Hosted on 
										{` `}
										<a href="https://github.com/royvn/royvn.github.io" target="_blank" rel="noopener noreferrer">
										Github
										</a>. 
										{` `}
										Created with passion in The Hague, The Netherlands.
									</p>
								</div>
							</div>
						</div>
					</footer>
				)} />
			);
		}
	}
	
export default Footer;
