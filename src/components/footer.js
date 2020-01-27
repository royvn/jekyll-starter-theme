import React from "react";
import { Link } from "gatsby";


class Footer extends React.Component {
	render() {
		return (
			<footer className="footer">
				<div className="grid">
					
					<div className="widget">
						<h4 className="widget-title">
							Roy van Neden
						</h4>		
					</div>

					<div className="widget">
						<h4 className="widget-title">Hoofdmenu</h4>
						<ul className="widget-list">					
							<li>
								<Link to="/">
									<span>
										Home
									</span>
								</Link>
							</li>
							<li>
								<Link to="/blog/">
									<span>
										Blog
									</span>
								</Link>
							</li>
							<li>
								<Link to="/about/">
									<span>
										Over
									</span>
								</Link>
							</li>
							<li>
								<Link to="/contact/">
									<span>
										Contact
									</span>
								</Link>
							</li>
						</ul>
					</div>
			
					<div className="widget">
						<h4 className="widget-title">Social</h4>
						<ul className="widget-list">
							<li>
								<a target="_blank" rel="noopener noreferrer" href="https://github.com/royvn">
									Github
								</a>
							</li>
							<li>
								<a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/royvn/">
									Instagram
								</a>
							</li>
							<li>
								<a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/roy-van-neden-10549761/">
									Linkedin
								</a>
							</li>
							<li>
								<a target="_blank" rel="noopener noreferrer" href="https://www.twitter.com/@royvn_">
									Twitter
								</a>
							</li>
						</ul>
					</div>

					<div className="widget">
						<h4 className="widget-title">Meest recente berichten</h4>
						<ul className="widget-list">
							
							<li>
								<a href="/blog/adobe-xd-en-line-height/">
									Adobe XD en line-height
								</a>
							</li>
							
							<li>
								<a href="/blog/css-variabelen-en-preprocessor-variabelen/">
									CSS variabelen en preprocessor variabelen
								</a>
							</li>
							
							<li>
								<a href="/blog/het-verschil-tussen-require-en-import/">
									Het verschil tussen require en import
								</a>
							</li>
							
							<li>
								<a href="/blog/webkit-naar-watchos-5/">
									Webkit naar WatchOS 5
								</a>
							</li>
							
							<li>
								<a href="/blog/sketch-plugin-tips-voor-een-snellere-workflow/">
									Sketch plugin tips voor een snellere workflow
								</a>
							</li>
							
						</ul>
					</div>

				</div>
				<div className="grid">
					<div className="row justify-content-center">
						<div className="col-lg-12 text-center pb-5">
							© 1992 - {new Date().getFullYear()}, Built with
							{` `}
							<a href="https://www.gatsbyjs.org" target="_blank" rel="noopener noreferrer">
								Gatsby
							</a>.
							Hosted on 
							{` `}
							<a href="https://github.com/royvn/royvn.github.io" target="_blank" rel="noopener noreferrer">
								Github
							</a>. 
							{` `}
							Created in the Hague, the Netherlands.
						</div>    
					</div>
				</div>
			</footer>
			);
		}
	}
	
	export default Footer;