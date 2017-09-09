import React, { Component } from 'react';

import './AppNav.css';

class AppNav extends Component {
  render() {
    return (
      <div className="AppNav">
        <ul>
          <li><a href="#">Login</a></li>
          <li><a href="#">Posts</a></li>
        </ul>
      </div>
    );
  }
}

export default AppNav;
