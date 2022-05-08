import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { PostProvider } from "./postProvider";
import { AuthProvider } from "./authProvider";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
    <PostProvider>
    <App />
    </PostProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
