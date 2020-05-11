import React from "react";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="App">
          <img
            className="logo"
            src="./images/ironhack-logo.svg"
            alt="Ironhack Logo"
          />
          <img className="menu" src="./images/menu-top.svg" />

          <div className="text-container">
            <h1>Say hello to ReactJS</h1>
            <p className="index-text">
              You will learn a Frontend framework from scratch, to become an
              Ninja Developer
            </p>
            <button>Awesome!</button>
          </div>
        </div>
        <div className="components-container">
          <div className="component">
            <img className="component-img" src="./images/icon1.png" />
            <h2>Declarative</h2>
            <p>React makes it painless to create interactive UIs</p>
          </div>
          <div className="component">
            <img className="component-img" src="./images/icon2.png" />
            <h2>Components</h2>
            <p>Build encapsulated components that manage their state.</p>
          </div>
          <div>
            <img className="component-img" src="./images/icon3.png" />
            <h2>Single-Way</h2>
            <p>A set of immutable values are passed to the component's.</p>
          </div>
          <div>
            <img className="component-img" src="./images/icon4.png" />
            <h2>JSX</h2>
            <p>Statically-typed, designed to run on modern browsers.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
