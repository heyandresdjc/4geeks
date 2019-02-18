import React, { Component } from 'react';
import "./app.css"
import logo from "./image.png"


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="app">
          <h1>
            Welcome to <br/>4Geeks Academy!
          </h1>
          <p>This is a landing example to setup your development enverioment, for the course.</p>
          <p>Go ahead and edit the <pre>src/App.js</pre></p>
          <p>and the changes will reflect automatically.</p>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
