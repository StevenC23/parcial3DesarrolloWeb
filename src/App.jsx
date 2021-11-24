import React, { Fragment } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
}
  from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import AuthContextProvider from './contexts/AuthContext';
import UseMediaQuery from './components/shared/UseMediaQuery';

function App() {
  const isDesktop = UseMediaQuery('(min-width: 1000px)');
  const isDesktopLogin = UseMediaQuery('(min-width: 876px)');

  return (
    <AuthContextProvider>
      <Router>
        <Fragment>
          <Routes>
            <Route exact path='/' element={<Login isDesktop={isDesktopLogin} />} />
            <Route exact path='/Home' element={<Home isDesktop={isDesktop} />} />
          </Routes>
        </Fragment>
      </Router>
    </AuthContextProvider>
  );
}

export default App;
