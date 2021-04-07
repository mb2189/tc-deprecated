import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Directory from './containers/Directory/Directory';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Directory />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
