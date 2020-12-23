import React from "react";
import { Link } from "gatsby";
import css from "./latestPost.module.scss";

function LatestPost(props) {
	return (
		<article className={css.latestPost}>
			<Link to={props.node.fields.slug} className={css.permalink}>
				{props.node.frontmatter.date &&
					<p className={css.date}>
						{props.node.frontmatter.date}
					</p>
				}
				{props.node.frontmatter.title &&
					<h3 className={css.title}>
						{props.node.frontmatter.title}
					</h3>
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