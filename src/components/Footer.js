import React from "react";
import { Link, StaticQuery, graphql } from "gatsby";
import Outro from "./Outro";
import WidgetList from "./WidgetList";

import css from "./footer.module.scss";

class Footer extends React.Component {

	constructor(props) {
		super(props);
	}

	handleCopy () {
		const input = document.getElementById('bitcoinAdress');
		input.select();
		document.execCommand('copy');
	}

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
					image1: file(relativePath: {eq: "macbook.png"}) {
						id
						childImageSharp {
							fluid(maxWidth: 342, quality: 100) {
								...GatsbyImageSharpFluid_withWebp
							}
						}
					}
					image2: file(relativePath: {eq: "boat.png"}) {
						id
						childImageSharp {
							fluid(maxWidth: 342, quality: 100) {
								...GatsbyImageSharpFluid_withWebp
							}
						}
					}
				}
				`} render={data => (
					<footer className={css.footer}>

						<Outro 
							subtitle="Wat ik doe" 
							title="Ik ontwikkel Shopify Themes bij CODE" 
							paragraph="Ben je zoekende naar een Shopify (Plus) Expert? Neem dan een kijkje bij CODE - a Shopify Plus agency!" 
							button_href="https://code.nl" 
							button_text="Meer info"
							image_1={data.image1.childImageSharp.fluid}
							image_2={data.image2.childImageSharp.fluid}
							 />
							 
						<div className={`${css.info} container page-spacer`}>
							<div className="row">
								
								<div className={`col-12 col-md-6 col-lg-3 ${css.panel}`}>
									<p className="h6">
										roy.vanneden.nl
									</p>		
									<p>
										Made with <span role="img">❤</span> in The Hague.
									</p>
								</div>

								<div className={`col-12 col-md-6 col-lg-3 ${css.panel}`}>
									<p className="h6">
										Doneer Bitcoin
									</p>
									<div className={css.bitcoin} onClick={this.handleCopy}>
										<input type="text" value="1CEZkvXA6dtfknK2YjTZpqtdQDYsBh5Ymi" className={`${css.bitcoin}`} id="bitcoinAdress" readOnly/>
										<button type="button">
											<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
											<span className="sr-only">
												Copy Bitcoin address
											</span>
										</button>
									</div>
								</div>

								<div className={`col-12 col-md-6 col-lg-3 ${css.panel}`}>
									<p className="h6">
										Mijn links
									</p>
									<p>
										<a href="https://github.com/royvn" target="_blank" rel="noopener noreferrer">
											Github
										</a>,
										{` `}
										<a href="https://www.instagram.com/royvn/" target="_blank" rel="noopener noreferrer">
											Instagram
										</a>,
										{` `}
										<a href="https://www.linkedin.com/in/roy-van-neden-10549761/" target="_blank" rel="noopener noreferrer">
											Linkedin
										</a>,
										{` `}
										<a href="https://twitter.com/royvn_" target="_blank" rel="noopener noreferrer">
											Twitter
										</a>.
									</p>
								</div>

								<div className={`col-12 col-md-6 col-lg-3 ${css.panel}`}>
									<p className="h6">
										© 1992 - {new Date().getFullYear()}
									</p>
									<p>
										Built with
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