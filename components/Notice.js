import React from 'react';
import Link from 'next/link';
import styles from './Notice.module.scss';


export default class Notice extends React.Component {

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
		return(
			<Link href={this.props.link}>
				<a className={`${styles.wrapper} ${this.state.hide ? `${styles.LinkHide}` : ''}`}>
					<div className={`${styles.content} page-spacer`}>
						{this.props.title &&
							<span className={styles.text}>
								{this.props.title}
							</span>
						}
						{this.props.button_text && 
							<span className={`${styles.button} button button--light button--sm`}>
								{this.props.button_text}
							</span>
						}
					</div>
				</a>
			</Link>
		);
	}
}