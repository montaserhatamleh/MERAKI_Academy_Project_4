import React from "react";
import ReactDOM from "react-dom/client";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <GoogleOAuthProvider
        clientId="587754405560-geol9ntjtn8bj42l81lqbic2r1at9p73.apps.googleusercontent.com"
      >
        <App />
      </GoogleOAuthProvider>
    </Router>
  </React.StrictMode>
);
