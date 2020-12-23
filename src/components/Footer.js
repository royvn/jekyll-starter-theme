import React from "react";
import { Link, StaticQuery, graphql } from "gatsby";
import css from "./footer.module.scss";
import Outro from "./Outro";

import WidgetList from "./WidgetList";

class Footer extends React.Component {

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
					<footer className={css.footer}>
						{/* <WidgetList title="Recent van blog" list={data.allMarkdownRemark.edges} /> */}
						
						<Outro subtitle="Hoi recruiters" title="Currently building Shopify themes at CODE - a Shopify plus agency" paragraph="Ik ben momenteel dan ook niet opzoek naar een nieuwe baan. Wil je een seintje krijgen wanneer wel? Meld je dan aan voor een notificatie!" button_mailto="roy.van.neden@gmail.com" button_text="Stuur een mailtje" />

						<div className={`${css.info} container page-width page-spacer`}>
							<div className="row">
								<div className="col-xs-12 col-md-6 col-lg-3">
									<p>
										roy.vanneden.nl
									</p>		
								</div>
								<div className="col-xs-12 col-md-6 col-lg-3">
									<p>
										Doneer Bitcoin
										<input type="text" value="1CEZkvXA6dtfknK2YjTZpqtdQDYsBh5Ymi" className={`${css.bitcoin}`} readOnly/>
										<button>
											Copy bitcoin address
										</button>
									</p>
								</div>
								<div className="col-xs-12 col-md-6 col-lg-3">
									<p>
										Shopify partner
									</p>
								</div>
								<div className="col-xs-12 col-md-6 col-lg-3">
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
