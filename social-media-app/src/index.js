import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { PostProvider } from "./contextProvider";

// Call make Server
makeServer();
ReactDOM.render(
  <React.StrictMode>
   <PostProvider>
   <App />
   </PostProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
