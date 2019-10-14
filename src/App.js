import React from "react";
import "./App.css";
import { Home, About, Contact, Navigation } from "./components";
import { Route } from "react-router-dom";

const App = () => (
  <div>
    <Navigation />
    <Route exact to="/" component={Home}></Route>
    <Route to="/" component={About}></Route>
    <Route to="/" component={Contact}></Route>
  </div>
);

export default App;