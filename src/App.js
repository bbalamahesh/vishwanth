import React, { Component } from "react";
import Main from './Main'
import Header from "./components/header/Header";

class App extends Component {

  render() {
    return (
      <div className="app" id="app">
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
