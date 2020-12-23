import React from "react";
import { Link, graphql } from "gatsby";

import css from "./latestPost.module.scss";
import LatestPost from "../components/LatestPost";


class LatestPosts extends React.Component {
  render(){
    return (
      <div>
        <div className="grid page-width page-spacer align-items-center">
          <div className="grid__item gcs-xs-1 gce-xs-13 gcs-lg-4 gce-lg-10 text-center">
            <h2 className="headline-title">
              Blog
            </h2>
            <p className="headline-paragraph">
              Zo nu en dan deel ik op mijn blog dingen die ik interessant vind of geleerd heb. Kijk gerust rond <span role="img">🙈</span>.
            </p>
            <Link to="/blog/" className="button button--lg button--light">Alle artikelen</Link>
          </div>
        </div> 
        <div className={css.latestPosts}>
          {this.props.data && this.props.data.map(({node}) => (
            <LatestPost key={node.id} node={node} />
          ))}
        </div>
      </div>
    );
  }
}

export default LatestPosts;