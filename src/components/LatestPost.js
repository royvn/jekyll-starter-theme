import React from "react";
import { Link, Img } from "gatsby";

import css from "./latestPost.module.scss";

function LatestPost(props) {
	console.log('props', props.node);
	return (
		<article className={`${css.latestPost}`}>
			<Link to={props.node.fields.slug} className={css.permalink}>
				{props.node.image &&
					<Img fluid={props.node.image} alt={props.node} style={{maxWidth: 1000}} />
				}				
				{props.node.frontmatter.date &&
					<p className={css.date}>
						{props.node.frontmatter.date}
					</p>
				}
				{props.node.frontmatter.title &&
					<h3 className={`h4 ${css.title}`}>
						{props.node.frontmatter.title}
					</h3>
				}
				{props.node.excerpt &&
					<p>
						{props.node.excerpt}
					</p>
				}
				{props.node.frontmatter.tags && 
					<div className={css.tags}>
						{props.node.frontmatter.tags.map((tag, index)=>(
							<span className="tag" key={index}>
								{tag}
							</span>
						))}
					</div>
				}
			</Link>	
		</article>
	);
}

export default LatestPost;