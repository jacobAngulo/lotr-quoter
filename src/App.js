import React, { Component } from "react";
import axios from "axios";
import { Route } from "react-router-dom";
import Home from "./components/Home";
import ChrctrQts from "./components/ChrctrQts";

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/:id" component={ChrctrQts} />
      </div>
    );
  }
}

export default App;
