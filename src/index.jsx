import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./js/reportWebVitals";
import App from "./App";

const app = ReactDOM.createRoot(document.getElementById("app"));
app.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
