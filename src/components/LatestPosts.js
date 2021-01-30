import React from "react";
import { Link, graphql } from "gatsby";

// import css from "./latestPost.module.scss";
import LatestPost from "../components/LatestPost";

import Swiper from 'swiper/swiper-bundle.js';
import 'swiper/swiper.scss';

class LatestPosts extends React.Component {


  componentDidMount() {
    const swiper = new Swiper('.swiper-container', {
      loop: true,
      spaceBetween: 48,
      slidesPerView: 3,
      pagination: {
        el: '.swiper-pagination'
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      scrollbar: {
        el: '.swiper-scrollbar'
      }
    });
  }

  componentWillUnmount() {
    
  }

  render(){

    return (
      <div className="section">
        <div className="container page-spacer align-items-center">
          {this.props.title &&
            <h2 className="">
              {this.props.title}
            </h2>
          }
        </div>
        <div className="container page-spacer align-items-center">
          <div className="swiper-container">
            <div className="swiper-wrapper">
              {this.props.data && this.props.data.map(({node}) => (
                <LatestPost key={node.id} node={node} />
              ))}
            </div>
            <div className="swiper-pagination"></div>
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
            <div className="swiper-scrollbar"></div>
          </div>
        </div> 

        
      </div>
    );
  }
}

export default LatestPosts;