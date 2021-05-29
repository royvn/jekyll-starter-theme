import React from 'react';
import Outro from './Outro';

export default class Footer extends React.Component {

	constructor(props) {
		super(props);
	}

	handleCopy () {
		const input = document.getElementById('bitcoinAdress');
		input.select();
		document.execCommand('copy');
	}

	render() {
		const { data } = this.props;
		const currentDate = new Date();
		return (
			
					<footer className={``}>

						<Outro 
							subtitle="Shopify hulp nodig?" 
							title="Ik ontwikkel Shopify Themes bij CODE" 
							paragraph="Ben je zoekende naar een Shopify (Plus) Expert? Neem dan een kijkje bij CODE - a Shopify Plus agency!" 
							button_href="https://code.nl" 
							button_text="Meer info"
							image_1="/macbook.png"
							image_2="/boat.png"
              />
						
						<div className={`container mx-auto px-8 lg:px-16 pt-12 pb-12`}>
							<div className="grid grid-cols-12 gap-6">

								<div className={`col-span-12 md:col-span-8 md:col-start-3 text-center`}>
									<p className="mb-3">
										 &copy; {currentDate.getFullYear()} roy.vanneden.nl - Made with <span role="img">❤️</span> in The Hague -
										Volg mij op <span role="img"></span>👨🏻‍💻
										<a href="https://github.com/royvn" target="_blank" rel="noopener noreferrer">
											Github
										</a>,
										{` `}
										<span role="img">📸</span>
										{` `}
										<a href="https://www.instagram.com/royvn/" target="_blank" rel="noopener noreferrer">
											Instagram
										</a>,
										{` `}
										<span role="img">💼</span>
										{` `}
										<a href="https://www.linkedin.com/in/roy-van-neden-10549761/" target="_blank" rel="noopener noreferrer">
											Linkedin
										</a>,
										{` of`}
										<span role="img">🦆</span>
										{` `}
										<a href="https://twitter.com/royvn_" target="_blank" rel="noopener noreferrer">
											Twitter
										</a>.
										Built with
										{` `}
										<a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">
										Next js
										</a> and {` `} 
										<a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
										React
										</a>
										.
										Hosted on 
										{` `}
										<a href="https://github.com/royvn/royvn.github.io" target="_blank" rel="noopener noreferrer">
										Github
										</a>.
									</p>
									<p>
										Doneer Bitcoin op 
									</p>
									<div className="inline" onClick={this.handleCopy}>
										<input type="text" value="bc1qzj30q2ahy54k3qxczc6rldd2h3dlmrsdg9fk7f" className={``} id="bitcoinAdress" readOnly/>
										<button type="button">
											<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
											<span className="sr-only">
												Copy Bitcoin address
											</span>
										</button>
									</div>
								</div>

							</div>
						</div>
						{/* 
						<div className={`container mx-auto px-8 lg:px-16 pt-12 pb-12`}>
							<div className="grid grid-cols-12 gap-6">
								
								<div className={`col-span-12 md:col-span-3`}>
									<p className="font-bold mb-3">
										roy.vanneden.nl
									</p>		
									<p>
										Made with <span role="img">❤</span> in The Hague.
									</p>
								</div>


								<div className={`col-span-12 md:col-span-3`}>
									<p className="font-bold mb-3">
										Mijn links
									</p>
									<p>
										<a href="https://github.com/royvn" target="_blank" rel="noopener noreferrer">
											Github
										</a>,
										{` `}
										<a href="https://www.instagram.com/royvn/" target="_blank" rel="noopener noreferrer">
											Instagram
										</a>,
										{` `}
										<a href="https://www.linkedin.com/in/roy-van-neden-10549761/" target="_blank" rel="noopener noreferrer">
											Linkedin
										</a>,
										{` `}
										<a href="https://twitter.com/royvn_" target="_blank" rel="noopener noreferrer">
											Twitter
										</a>.
									</p>
								</div>

								<div className={`col-span-12 md:col-span-3`}>
									<p className="font-bold mb-3">
										© 1992 - {new Date().getFullYear()}
									</p>
									<p>
										Built with
										{` `}
										<a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">
										Next js
										</a> and {` `} 
										<a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
										React
										</a>
										.
										Hosted on 
										{` `}
										<a href="https://github.com/royvn/royvn.github.io" target="_blank" rel="noopener noreferrer">
										Github
										</a>.
									</p>
								</div>

							</div>
						</div> */}
					</footer>

			);
		}
	}