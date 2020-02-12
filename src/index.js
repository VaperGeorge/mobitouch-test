import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom'
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "font-awesome/css/font-awesome.min.css";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import "bootstrap/dist/css/bootstrap.min.css";
// Version >= 2.4.0
import "swiper/css/swiper.css";
import "react-datepicker/dist/react-datepicker.css";

const store = configureStore();

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
