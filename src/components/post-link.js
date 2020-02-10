import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";

function PostLink(props) {
	return (
		<article className="post-link">
			<div className="post-link__image">
					{props.node.frontmatter.image}
					{/* <Img src={props.node.frontmatter.image.childImageSharpsrc} alt={props.node.frontmatter.title} /> */}
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
			</div>
			<Link to={props.node.fields.slug} className="btn btn--block btn--outline-blue">
				Lees verder
			</Link>
		</article>
	);
}

export default PostLink;