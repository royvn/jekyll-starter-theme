import React from "react";
import { Link, StaticQuery, graphql } from "gatsby";
import WidgetList from "./widget-list";

class Footer extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<footer className="footer">
				<div className="grid">
					
					<div className="grid__item">
						<div className="widget">
							<h4 className="widget-title">
								{this.props.siteTitle}
							</h4>		
						</div>
					</div>

					<div className="grid__item">
						<WidgetList title="Hoofdmenu" list={
							[
								{
									node: {
										fields: {
											slug: "/"
										},
										frontmatter:{
											title: "Home"
										}
									}
								},
								{
									node: {
										fields: {
											slug: "/blog/"
										},
										frontmatter:{
											title: "Blog"
										}
									}
								},
								{
									node: {
										fields: {
											slug: "/about/"
										},
										frontmatter:{
											title: "About"
										}
									}
								},
								{
									node: {
										fields: {
											slug: "/contact/"
										},
										frontmatter:{
											title: "Contact"
										}
									}
								}
							]
						} />
					</div>

					<div className="grid__item">
						<WidgetList title="Social" list={
							[
								{
									node: {
										fields: {
											slug: "/contact/"
										},
										frontmatter:{
											title: "Github"
										}
									}
								},
								{
									node: {
										fields: {
											slug: "/contact/"
										},
										frontmatter:{
											title: "Instagram"
										}
									}
								},
								{
									node: {
										fields: {
											slug: "/contact/"
										},
										frontmatter:{
											title: "Linkedin"
										}
									}
								},
								{
									node: {
										fields: {
											slug: "/contact/"
										},
										frontmatter:{
											title: "Twitter"
										}
									}
								}
							]
						} />
					</div>
					
					<div className="grid__item">
						<StaticQuery query={graphql`
							query {
								allMarkdownRemark(filter: {}, limit: 5) {
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
								<WidgetList title="Recent van blog" list={data.allMarkdownRemark.edges} />
							)} />
					</div>

				</div>
				<div className="grid">
					<div className="row justify-content-center">
						<div className="col-lg-12 text-center pb-5">
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
							Created in the Hague, the Netherlands.
						</div>    
					</div>
				</div>
			</footer>
			);
		}
	}
	
export default Footer;

