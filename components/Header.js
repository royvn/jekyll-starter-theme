import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default class Header extends React.Component {

  constructor (props) {
		super(props);
		this.state = {
			active: false
		}
		this.handleHeaderScroll = this.handleHeaderScroll.bind(this);
	}

	handleHeaderScroll() {
		console.log('checkpoint handleHeaderScroll');
		let currentScrollYPosition = window.scrollY;
		let windowHeight = window.innerHeight;
		console.log(
			{
				currentScrollYPosition,
				windowHeight
			}
		);
		if(currentScrollYPosition > 24 ) {
			this.setState({ 
				active: true 
			});
		} else {
			this.setState({ 
				active: false
			});
		}

	}

	componentDidMount() {
		window.addEventListener('scroll', this.handleHeaderScroll);
	}

  render() {
    return(
      <header className={this.state.active ? `fixed top-0 shadow-sm bg-white text-black right-0 left-0 z-50` : `absolute top-6 text-white right-0 left-0 z-50`}>
        <div className={`container mx-auto px-6 lg:px-16 flex flex-wrap justify-center`}>
          <div className={`py-3 md:mr-auto`}>
            <Link href="/">
              <a className={`block font-bold text-lg leading-6 py-3 ${this.state.active ? `text-black hover:text-black`:`text-white hover:text-white` } hover:text-opacity-60`}>
                Roy van Neden
              </a>
            </Link>
          </div>
          <button type="button" className="appearance-none block md:hidden inline-block text-center px-6 py-3 text-sm leading-6 font-semibold transition-all rounded-full bg-white text-black hover:bg-black hover:text-white">
            Menu
          </button>
          <ul className={`flex flex-wrap items-center justify-center py-3 md:ml-6 transition-all`}>
            <li className={`md:mr-6`}>
              <Link href="/info">
                <a className={`block font-medium text-sm md:text-base py-3 ${this.state.active ? `text-black hover:text-black`: `text-white hover:text-white` } text-opacity-60 hover:text-opacity-100`}>
                  Info
                </a>
              </Link>
            </li>
            <li className={`md:mr-6`}>
              <Link href="/blog">
                <a className={`block font-medium text-sm md:text-base py-3 ${this.state.active ? `text-black hover:text-black`: `text-white hover:text-white` } text-opacity-60 hover:text-opacity-100`}>
                  Blog
                </a>
              </Link>
            </li>
            <li className={`md:mr-6`}>
              <Link href="/snippets">
                <a className={`block font-medium text-sm md:text-base py-3 ${this.state.active ? `text-black hover:text-black`: `text-white hover:text-white` } text-opacity-60 hover:text-opacity-100`}>
                  Snippets
                </a>
              </Link>
            </li>
            <li className={`md:mr-12`}>
              <Link href="/contact">
                <a className={`block font-medium text-sm md:text-base py-3 ${this.state.active ? `text-black hover:text-black`: `text-white hover:text-white` } text-opacity-60 hover:text-opacity-100`}>
                  Contact
                </a>
              </Link>
            </li>
            <li className={`hidden md:block`}>
              <a href="https://www.linkedin.com/in/roy-van-neden-10549761/" target="_blank" rel="noopener noreferrer" className={`inline-block text-center px-6 py-3 text-sm leading-6 font-semibold transition-all rounded-full ${this.state.active ? `bg-black text-white hover:bg-gray-700 hover:text-white`: `bg-white text-black hover:bg-black hover:text-white` }`}>
                Linkedin
              </a>
            </li>
          </ul>
        </div> 
      </header>
    );
  }
}