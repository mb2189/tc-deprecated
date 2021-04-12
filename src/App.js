import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Directory from './containers/Directory/Directory';

const App = props => (
  <BrowserRouter>
    <div className="App">
      <Directory />
    </div>
  </BrowserRouter>
)

export default App;
