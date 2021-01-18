import React from "react";
import { Link, graphql } from "gatsby";

import css from "./latestPost.module.scss";
import LatestPost from "../components/LatestPost";

import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';

class LatestPosts extends React.Component {
  render(){
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

    return (
      <div className="section">
        <div className="container page-spacer align-items-center">
          <div className="">
            {this.props.title &&
              <h2 className="">
                {this.props.title}
              </h2>
            }
            {this.props.paragraph &&
              <p className="rte rte--md">
                {this.props.paragraph}
              </p>
            }
            {this.props.link_to && this.props.link_text &&
              <Link to={this.props.link_to} className="button button--lg button--light">
                {this.props.link_text}
              </Link>
            }
          </div>
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