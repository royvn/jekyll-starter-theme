import React from "react";
import {Link} from "gatsby";
import Img from "gatsby-image";

import css from "./banner.module.scss";

function Banner(props) {
	return (
		<div className="section">
			<div className={css.banner}>
				<div>
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
						<Img fixed={props.image} alt="" style={{maxWidth: 1000}} />
					}
					{props.button_to && props.button_text &&
						<Link to={props.button_to} className="button button--lg button--light">
							{props.button_text}
						</Link>
					}
				</div>
			</div>
		</div>
	);
}
	
export default Banner;