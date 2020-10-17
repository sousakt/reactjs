import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

//import css js của bootstrap
//css
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
//js
import "../node_modules/bootstrap/dist/js/bootstrap.min";
import "../node_modules/jquery/dist/jquery.slim.min";
import "../node_modules/popper.js/dist/umd/popper.min";

//tạo store
import { createStore } from "redux";
//tạo sự kết nối giữa react - redux
import { Provider } from "react-redux";

import rootReducer from "./redux/reducers";

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  // noi dung in ra html
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  //vi tri in ra html
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
