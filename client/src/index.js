import React from "react";
import { createRoot } from 'react-dom/client';
import App from "./App";
import { Provider } from 'react-redux';
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./store"

const store = configureStore({
  reducer: authReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
    }),
});

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
