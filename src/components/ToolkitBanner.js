import React from "react";
import Img from "gatsby-image";

function Banner(props) {
	const image ={
		backgroundImage: 'url(' + props.image.src +')'
	};
	return (
		<div className="toolkit">
			<div className="banner" style={image}></div>
		</div>
		);
	}
	
	export default Banner;