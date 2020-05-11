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
            <p className = "index-text">
              You will learn a Frontend framework from scratch, to become an
              Ninja Developer
            </p>
            <button>Awesome!</button>
          </div>
        </div>
        <div className = "components-container">
          <div className = "component">
            <img className = "component-img" src = "./images/icon1.png" />
            <h2>Declarative</h2>
            <p>React makes it painless to create interactive UIs</p>
          </div>
          <div className = "component">
            <img className = "component-img" src = "./images/"/>
            <h2></h2>
            <p></p>
          </div>
          <div>
            <img />
            <h2></h2>
            <p></p>
          </div>
          <div>
            <img />
            <h2></h2>
            <p></p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
