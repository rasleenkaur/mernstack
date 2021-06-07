import React, { createContext, useReducer } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Signup from "./components/Signup";
import ErrorPage from "./components/ErrorPage";
import { Route, Switch } from "react-router-dom";

import { initalState, reducer } from "../src/reducer/UseReducer";

export const UserContext = createContext();
// 1: context API

const Routing = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
      <Route path="/register">
        <Login />
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>
      <Route path="/logout">
        <Logout />
      </Route>
      <Route>
        <ErrorPage />
      </Route>
    </Switch>
  );
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initalState);

  return (
    <>
      <UserContext.Provider value={{ state, dispatch }}>
        <Navbar />
        <Routing />
      </UserContext.Provider>
    </>
  );
};
export default App;
