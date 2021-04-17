import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import App from "./routes";

import configureStore from "./store/configureStore";
export const store = configureStore();



ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

