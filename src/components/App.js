import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  render() {
    return (
      <>
        <span data-ns-test="project-name"></span>
        <span data-ns-test="project-description"></span>
      </>
    );
  }
}

export default App;
