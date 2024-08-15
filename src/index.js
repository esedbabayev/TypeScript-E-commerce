import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

// BrowserRouter
import { BrowserRouter as Router } from "react-router-dom";

// Provider
import { Provider } from "react-redux";

// Store
import store from "./store.js"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>
);
