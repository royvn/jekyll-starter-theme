import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";

function PostLink(props) {
	return (
		<article className="post-link" key={props.node.id}>
			<div className="post-link__image">
				<Img fluid={props.node.frontmatter.image.childImageSharp.fluid} alt={props.node.frontmatter.title} />
			</div>
			<div className="post-link__content">
        <h2 className="post-link__title">
          {props.node.frontmatter.title}
        </h2>
        <p className="entry-meta">
					{props.node.frontmatter.date}
        </p>
        <p>
          {props.node.excerpt}
        </p>
				<Link to={props.node.fields.slug} className="btn btn--block btn--outline-blue">
					Lees verder
				</Link>
			</div>
		</article>
	);
}

export default PostLink;