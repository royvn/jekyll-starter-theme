import React from "react";
import {Link} from "gatsby";
import Img from "gatsby-image";

import css from "./banner.module.scss";

function Banner(props) {
	return (
		<div className="section">
			<div className={css.banner}>
				{props.title && 
					<h2>
						{props.title}
					</h2>
				}
				{props.subtitle && 
					<p>
						{props.subtitle}
					</p>
				}
				{props.image &&
					<Img fluid={props.image} alt="" style={{maxWidth: 1000}} />
				}
				{props.link_to && props.link_text &&
					<Link to={props.link_to} className="button button--lg button--light">
						{props.link_text}
					</Link>
				}
			</div>
		</div>
	);
}
	
export default Banner;