import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Dashboard from "./components/Dashboard";

const App = ({}) => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/userAccounts' />
        <Route path='/products' />
        <Route path='/revenue' />
        <Route path='/settings' />
      </Routes>
      <Navigation />
    </Router>
  );
};

export default App;
