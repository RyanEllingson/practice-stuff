import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import { CssBaseline } from "@material-ui/core";
import Content from "./components/Content";
import Alt from "./components/Alt";

function App() {
  return (
    // <div className="App">
    //   <CssBaseline />
    //   <Content/>
    // </div>
    <Router>
      <CssBaseline />
      <Switch>
        <Route exact path="/" component={Content} />
        <Route exact path="/alt/" component={Alt} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
