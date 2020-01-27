import React from "react";
import { Link } from "gatsby";

function Card(props) {
	return (
		<article className="entry">
			<div className="entry-image">
					{props.node.frontmatter.image}
					{/* <img src={props.node.frontmatter.image.childImageSharp.original.src} srcSet={props.node.frontmatter.image.childImageSharp.fluid.srcSet} alt={props.node.frontmatter.title} /> */}
			</div>
			<div className="entry-content">
        <h2 className="entry-title">
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

export default Card;