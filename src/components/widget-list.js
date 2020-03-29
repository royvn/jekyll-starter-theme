import React from "react";
import { Link } from "gatsby";

class WidgetList extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="widget">
        <p className="widget-title">
          {this.props.title}
        </p>
        <ul className="widget-list">
          {(this.props.list).map(({node}) => (
            <li key={node.id} className="widget-list-item">
              <Link to={node.fields.slug} className="widget-list-link" activeClassName="widget-list-link--active">
                {node.frontmatter.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }

}

export default WidgetList;