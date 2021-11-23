import React, { Fragment } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
}
from "react-router-dom";
import Login from "./components/Login.jsx";
import Home from "./components/Home.jsx";
import AuthContextProvider from './contexts/AuthContext';

function App() {
  return (
    <AuthContextProvider>
      <Router>
        <Fragment>
          <Routes>
            <Route exact path='/' element={<Login />} />
            <Route exact path='/Home' element={<Home />} />
          </Routes>
        </Fragment>
      </Router>
    </AuthContextProvider>
  );
}

export default App;
