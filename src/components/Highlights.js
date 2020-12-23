import React from "react";

class Highlights extends React.Component {

  constructor(props) {
    super(props);
  }

  
  test() {

    const testPromise = new Promise((resolve, reject) => {
      setTimeout(function(){
        reject(new Error('Noppppeeee'));
      }, 1000);
    });

    // testPromise.then(function(result){
    //   console.log(result);
    // }).then(() => {
    //   console.log('after promise');
    // }).catch(error => {
      
    //   console.log(typeof error);
    //   console.log(typeof error);
    //   console.log(JSON.stringify(error));
    // });

  }

  render() {
    return (
      <div>
        <p>
        Highlights
        </p>
        <h2>
          Highlight component check this important stuff
        </h2>
        <button type="button" className="button button--primary" onClick={this.test}>Test callback</button>
        <div className="container">
          <div className="row">
            <div className="col col-xs-12 col-md-6 col-lg-6">
              Lees content hier uit.
            </div> 
          </div>
        </div>
      </div>
    );
  }

}

export default Highlights;