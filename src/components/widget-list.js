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
            <li key={node.id}>
              <Link to={node.fields.slug}>
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