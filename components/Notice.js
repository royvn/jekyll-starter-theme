import React from 'react';
import Link from 'next/link';
export default class Notice extends React.Component {

	constructor (props) {
		super(props);
		this.state = {
			hide: false
		}
		this.handleNoticeAnimation = this.handleNoticeAnimation.bind(this);
	}

	handleNoticeAnimation() {
		console.log('checkpoint handleNoticeAnimation');
		let currentScrollYPosition = window.scrollY;
		let windowHeight = window.innerHeight;
		console.log(
			{
				currentScrollYPosition,
				windowHeight
			}
		);
		if(currentScrollYPosition >= windowHeight) {
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
			<Link href={this.props.link_to}>
				<a className={`block bg-green-400 py-3 transition-all hover:bg-black hover:text-white ${this.state.hide ? `transform translate-y-full` : ''}`}>
					<div className="container mx-auto px-8 lg:px-16 text-center">
						{this.props.link_text &&
							<span className="text-sm">
								{this.props.link_text}
							</span>
						}
					</div>
				</a>
			</Link>
		);
	}
}