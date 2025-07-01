import { useState, Component } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomeComponent from "./components/HomeComponent";

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
