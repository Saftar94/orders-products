import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./style/globalStyles";
import { Provider } from "react-redux";
import store from "./redux/store";
const rootElement = document.getElementById("root");

const root = createRoot(rootElement);
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <GlobalStyle />
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>,
);
