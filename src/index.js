import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import reducer from "./redux/reducers";
import { legacy_createStore as createStore } from "redux";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
const store = createStore(reducer);

root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  // </React.StrictMode>
);

reportWebVitals();
