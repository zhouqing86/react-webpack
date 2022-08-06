import { ReduxRouter } from "@lagunovsky/redux-react-router";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { browserHistory } from "./history";
import AppRoutes from "./routes/appRoutes";
import { store } from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReduxRouter
        history={browserHistory}
        store={store}
        children={<AppRoutes />}
      />
    </Provider>
  </React.StrictMode>
);