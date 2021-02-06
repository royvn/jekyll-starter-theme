import React from "react";
import { Link, graphql } from "gatsby";

import FeaturedPost from "../components/FeaturedPost";

import Swiper from 'swiper/swiper-bundle.js';
import 'swiper/swiper.scss';
import css from "./latestPosts.module.scss";

class LatestPosts extends React.Component {

  componentDidMount() {
    const swiper = new Swiper('.swiper-container', {
      loop: false,
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
          slidesPerView: 1.125,
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
      <div className={`section section--padding section--light ${css.section} `}>
        <div className="container page-spacer align-items-center">
          <div className="row">
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
          <div className={`${css.swiperContainer} swiper-container`}>
            <div className="swiper-wrapper">
              {this.props.data && this.props.data.map(({node}) => (
                <div className={`${css.swiperSlide} swiper-slide`}>
                  <FeaturedPost key={node.id} node={node} />
                </div>
              ))}
            </div>
            <div className="swiper-pagination"></div>
            <button type="button" className={`${css.swiperButton} ${css.swiperButtonPrev} swiper-button-prev`}>
              <span className="sr-only">
                Prev
              </span>
              <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>
            </button>
            <button type="button"  className={`${css.swiperButton} ${css.swiperButtonNext} swiper-button-next`}>
              <span className="sr-only">
                Next
              </span>
              <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/></svg>
            </button>
            <div className="swiper-scrollbar"></div>
          </div>
        </div> 

        
      </div>
    );
  }
}

export default LatestPosts;