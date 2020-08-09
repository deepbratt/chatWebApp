import React from "react";
import { Spinner } from "react-bootstrap";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import App from "./App";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import persist from "./store";

const persistStore = persist();
ReactDOM.render(
  <React.StrictMode>
    <Provider store={persistStore.store}>
      <PersistGate
        loading={<Spinner animation="border" variant="warning" />}
        persistor={persistStore.persistor}
      >
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
