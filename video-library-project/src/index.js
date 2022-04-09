import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { VideoProvider } from "./useVideo";
import {BrowserRouter as Router} from "react-router-dom";
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <VideoProvider>
      <Router>
      <App />
      </Router>
    </VideoProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
