import React from "react";
import ReactDOM from "react-dom";
import "./css/neo.css";
import HomePage from "./components/homepage/homepage";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<HomePage />, document.getElementById("root"));
serviceWorker.unregister();
