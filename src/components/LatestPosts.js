import React from "react";
import { Link, graphql } from "gatsby";

import FeaturedPost from "../components/FeaturedPost";

import Swiper from 'swiper/swiper-bundle.js';
import 'swiper/swiper.scss';

class LatestPosts extends React.Component {

  componentDidMount() {
    const swiper = new Swiper('.swiper-container', {
      loop: true,
      spaceBetween: 16,
      slidesPerView: 1,
      pagination: {
        el: '.swiper-pagination'
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      scrollbar: {
        el: '.swiper-scrollbar'
      },
      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 16
        },
        // when window width is >= 480px
        768: {
          slidesPerView: 2,
          spaceBetween: 24
        },
        // when window width is >= 640px
        1024: {
          slidesPerView: 3,
          spaceBetween: 24
        }
      }
    });
  }

  componentWillUnmount() {
    
  }

  render(){

    return (
      <div className="section">
        <div className="container page-spacer align-items-center">
          <div className="">
            <div class="col-12 col-md-6">
              {this.props.title &&
                <h2>
                  {this.props.title}
                </h2>
              }
            </div>
            {this.props.link_to && this.props.link_text && 
              <div class="col-12 col-md-6">
                <Link to={this.props.link_to} className="button button--primary">
                  {this.props.link_text}
                </Link>
              </div>
            }
          </div>
        </div>
        <div className="container page-spacer align-items-center">
          <div className="swiper-container">
            <div className="swiper-wrapper">
              {this.props.data && this.props.data.map(({node}) => (
                <div className="swiper-slide">
                  <FeaturedPost key={node.id} node={node} />
                </div>
              ))}
            </div>
            <div className="swiper-pagination"></div>
            <button type="button" className="swiper-button-prev">Prev</button>
            <button type="button" className="swiper-button-next">Next</button>
            <div className="swiper-scrollbar"></div>
          </div>
        </div> 

        
      </div>
    );
  }
}

export default LatestPosts;