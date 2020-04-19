import React from "react";
import { Link } from "gatsby";

function LatestPost(props) {
	return(
		<article className="latest-post">
			<Link to={props.node.fields.slug} className="latest-post__permalink">
				<p className="latest-post__date">
					{props.node.frontmatter.date}
				</p>
				<h3 className="latest-post__title">
					{props.node.frontmatter.title}
				</h3>
				<div className="latest-post__tags">
					{props.node.frontmatter.tags.map((tag)=>(
						<span className="tag">
							{tag}
						</span>
					))}
				</div>
			</Link>	
		</article>
	);
}

export default LatestPost;