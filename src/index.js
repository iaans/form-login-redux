import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Login from "../src/components/Login";
import { Provider } from "react-redux";
import store from "./store";
console.log("🚀 ~ file: index.js ~ line 8 ~ store", store);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
      <Login />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
