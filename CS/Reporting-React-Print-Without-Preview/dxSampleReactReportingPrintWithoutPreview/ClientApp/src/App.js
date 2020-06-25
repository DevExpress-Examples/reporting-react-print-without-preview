import React, { Component } from 'react';
import HomeComponent from "./components/HomeComponent";

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <div>
        <div>
          <HomeComponent />
        </div>
      </div>
    );
  }
}
