import React, { Component } from "react";
import "./App.css";
import AppBar from "./components/AppBar/AppBar";
import { Switch, Route } from "react-router-dom";

import NotFound from "./components/NotFound/NotFound";
import Convert from "./pages/Converter";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <AppBar />
        </header>
        <main>
          <Switch>
            <Route exact path="/" render={() => <Convert />} />
            <Route component={NotFound} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
