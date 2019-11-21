import React, {Component} from 'react';
/* import { BrowserRouter, Switch, Route } from 'react-router-dom';
 */

/* fetchQuestions = () => {
}; */

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {    
    return (
      <>
      <div className="container">
        <div className="header">
          <div className="stars"></div>
          <div className="twinkling"></div>
          {/* <img src="logo.png"></img> */}
          <h1>
              The Master Of Love
          </h1>
        </div>

        <div className="content">
          <h1>Corpo Principal</h1>
          <div class="wrap">
          <button class="button">Submit</button>
          </div>
        </div>

        <div className="footer">
          <div class="stars"></div>
          <div class="twinkling"></div>
          <h1>Footer</h1>
        </div> 
      </div>
      </>
    );
  }
}

export default App;
