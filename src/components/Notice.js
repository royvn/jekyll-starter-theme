import React from "react";
import { Link } from "gatsby";
import css from "./notice.module.scss";
class Notice extends React.Component {

	constructor (props) {
		super(props);
		this.state = {
			hide: false
		}
		this.handleNoticeAnimation = this.handleNoticeAnimation.bind(this);
	}

	handleNoticeAnimation() {
		let currentScrollYPosition = window.scrollY;
		let pageHeight = document.body.clientHeight;
		let breakpoint = (pageHeight - window.innerHeight) - (pageHeight / 10);
		console.log({
			currentScrollYPosition: currentScrollYPosition,
			breakpoint: breakpoint
		})
		if(currentScrollYPosition >= breakpoint) {
			this.setState({ 
				hide: true 
			});
		} else {
			this.setState({ 
				hide: false
			});
		}

	}

	componentDidMount() {
		window.addEventListener('scroll', this.handleNoticeAnimation);
	}

	render() {
		if(!window.location.pathname.includes(this.props.link)) {
			return (
				<Link to={this.props.link} className={`${css.notice} ${this.state.hide ? `${css.noticeHide}` : ''}`} activeClassName="notice--active">
					<div className={` ${css.content} page-spacer`}>
						{this.props.title &&
							<span className={css.text}>
								{this.props.title}
							</span>
						}
						{this.props.button_text && 
							<span className={`${css.button} button button--light button--sm`}>
								{this.props.button_text}
							</span>
						}
					</div>
				</Link>
			);
		} else {
			return null;
		}
  }
  
}
	
export default Notice;