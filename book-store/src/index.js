import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from './App';
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>{/* This changes the route when clicked on */}
  <React.StrictMode> {/*Verify the deprecated methods are not being used, and if they're used strict mode will warn you in the console. */}
    <App />
  </React.StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

