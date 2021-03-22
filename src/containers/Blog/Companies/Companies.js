import React, { Component } from 'react';

import './Companies.css';

class Companies extends Component {

    render () {
        return (
          <div className="companies">
            <h1>Browse this list of Samsung Next partner companies who are currently hiring!</h1>
            <div className="company-list">
              <ul>
                <li>
                  <a href="">Company #1</a>
                </li>
                <li>
                  <a href="">Company #2</a>
                </li>
                <li>
                  <a href="">Company #3</a>
                </li>
                <li>
                  <a href="">Company #4</a>
                </li>
              </ul>
            </div>
          </div>
        );
    }
}

export default Companies;