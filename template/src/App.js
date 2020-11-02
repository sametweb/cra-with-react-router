import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Router>
        <Route component={Home} />
        <Route component={About} />
        <Route component={Contact} />
      </Router>
    </div>
  );
}

export default App;
