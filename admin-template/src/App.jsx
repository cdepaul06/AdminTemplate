import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
//import Home from "./components/Home/Home";
//import About from "./components/About/About";
//import Contact from "./components/Contact/Contact";

const App = ({}) => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path='/' />
        <Route path='/users' />
        <Route path='/products' />
        <Route path='/settings' />
      </Routes>
    </Router>
  );
};

export default App;
