import React from "react";
import css from "./cursor.module.scss";


class Cursor extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      x: 0,
      y: 0
    };
  }

  componentDidMount() {
    console.log('componentDidMount check');
    // window.addEventListener('scroll', this.handleCursor);
    window.addEventListener('mousemove', function(e){
      console.log('e.clientX ', e.clientX);
      console.log('e.clientY ', e.clientY);
      console.log(this);
      // this.setState({
      //   x: e.clientX,
      //   y: e.clientY
      // });
      // this.handleCursor(e);

    });
  }
  
  // handleCursor(e) {
  // }

  render() {
    return (
      <div className={`${css.cursor}`} style={{left: this.state.x + 'px', right: this.state.y + 'px' }}></div>
    );
  }

}

export default Cursor;