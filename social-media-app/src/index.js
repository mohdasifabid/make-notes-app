import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { PostProvider } from "./contextProvider";
import {BrowserRouter as Router } from "react-router-dom"
import { AuthProvider } from "./authProvider";

// Call make Server
makeServer();
ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
   <PostProvider>
     <Router>
     <App />
     </Router>
   </PostProvider>
   </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
