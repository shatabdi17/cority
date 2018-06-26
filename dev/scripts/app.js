import React from 'react';
import ReactDOM from 'react-dom';
import Listcard from './Listcard';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
      <div className="wrapper">
       <Listcard />
      </div>
      </React.Fragment>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
