import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

function index() {

    return (
      <>
        <div className="header">
        <h1>
            The Master Of Love
        </h1>
        </div>
  
        <div className="content">
        <h1>Corpo Principal</h1>
        </div>

        <div className="footer">
        <h1>Foooter</h1>
        </div>
      </>
    )
  }
  
  export default index
  