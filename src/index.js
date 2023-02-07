import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {Route,BrowserRouter, Switch}  from 'react-router-dom';
import TxnContainer from "./components/TxnContainer";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/transactions" component={TxnContainer} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);