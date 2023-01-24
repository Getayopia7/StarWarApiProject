import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./components/Asset/StarwarAll.css"; //
import { BrowserRouter } from "react-router-dom";
import MainFunctional from "./components/mainFunctional";
import Option from "./components/Option/Option";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Option />
          <MainFunctional />
        </div>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
//render(<App />, document.getElementById("root"));
