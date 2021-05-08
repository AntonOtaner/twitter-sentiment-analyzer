// Anton Otaner , 1930028
// Friday , May 7
// R. Vincent , instructor
// Final Project

//Packages
import React from "react";
import ReactDOM from "react-dom";

//Components
import App from "./components/Layout/App/App";

//Helpers
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
