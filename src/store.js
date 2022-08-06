import {
    createRouterMiddleware,
  } from "@lagunovsky/redux-react-router";
  import { configureStore } from "@reduxjs/toolkit";
  import { browserHistory } from "./history";
  import { rootReducer } from "./reducers";
  
  const routerMiddleware = createRouterMiddleware(browserHistory);
  
  export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(routerMiddleware),
  });