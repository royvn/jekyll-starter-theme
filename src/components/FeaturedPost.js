import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";

function FeaturedPost(props) {
	return (
		<article className="featured-post" key={props.node.id}>
			<Link to={props.node.fields.slug} className="featured-post__slug">
				<div className="featured-post__image">
					<Img fluid={props.node.frontmatter.image.childImageSharp.fluid} alt={props.node.frontmatter.title} />
				</div>
				<div className="featured-post__content">
					<h2 className="featured-post__title">
						{props.node.frontmatter.title}
					</h2>
					<p className="entry-meta">
						{props.node.frontmatter.date}
					</p>
					<p>
						{props.node.excerpt}
					</p>
					<span to={props.node.fields.slug} className="button button--block button--outline-primary">
						Lees verder
					</span>
					</div>
				</Link>
		</article>
	);
}

export default FeaturedPost;