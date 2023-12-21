import "./App.css";
// import React from "react";
import { Switch, Route } from "react-router-dom";
import GraphPage from "./components/GraphPage/index";
import MapPage from "./components/MapPage/index";
import UserCommentsPage from "./components/UserCommentsPage/index";

const App = () => {
  return (
    <div className="App">
      {/* Your other non-routing components */}
      <Switch>
        <Route path="/about" component={GraphPage} />
        <Route path="/contact" component={MapPage} />
        <Route path="/" component={UserCommentsPage} />
      </Switch>
    </div>
  );
};

export default App;
