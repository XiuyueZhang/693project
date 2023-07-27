import React from "react";
import { createRoot } from 'react-dom/client';
import App from "./App";
import { Provider } from 'react-redux';
import { configureStore } from "@reduxjs/toolkit";
import rootReducers from "./store";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { PersistGate } from 'redux-persist/integration/react'

const persistConfig = {
  key: 'root',
  storage,
}
 
// const persistedReducer = persistReducer(persistConfig, rootReducers);

const store = configureStore({
  reducer: rootReducers,
});

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
