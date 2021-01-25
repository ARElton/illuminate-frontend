import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route} from "react-router-dom";
import "./index.css";
import App from "./components/App";

ReactDOM.render(
  <Router>
    <Route exact path="/">
      <App />
    </Route>
  </Router>,
  document.getElementById("root")
);