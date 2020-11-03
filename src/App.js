import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Artist from "./pages/Artist";
import Header from './components/Header';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/" component={Home} />
          <Route exact path="/artist" component={Artist} />
        </div>
      </Router>

    );
  }
}

export default App;
