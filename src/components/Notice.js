import React from "react";
import { Link } from "gatsby";
import css from "./notice.module.scss";
class Notice extends React.Component {

	constructor (props) {
		super(props);
	}

	render() {
		return (
			<Link to={this.props.link} className={css.notice} activeClassName="notice--active">
				<div className={` ${css.content} page-width page-spacer`}>
					{this.props.title &&
						<span className={css.text}>
							{this.props.title}
						</span>
					}
					{this.props.button_text && 
						<span className={` ${css.button} button button--light button--sm`}>
							{this.props.button_text}
						</span>
					}
				</div>
			</Link>
		);
  }
  
}
	
export default Notice;