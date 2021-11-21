import React, { Fragment } from "react";
import{
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Login from "./components/Login.jsx";
import Home from "./components/Home.jsx";


function App() {
  return (
    <Router>
      <Fragment>
        <Routes>
          <Route exact path='/' element={<Login/>}/>
          <Route exact path='/Home' element={<Home/>}/>
        </Routes>
      </Fragment>
    </Router>
  );
}

export default App;
