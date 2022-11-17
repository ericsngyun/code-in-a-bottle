import React from "react";
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { configureStore, compose, applyMiddleware } from '@reduxjs/toolkit'
import thunk from 'redux-thunk';

import reducers from './src/reducers/index'

const store = configureStore({reducer: reducers}, compose(applyMiddleware(thunk)));

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App />
    </Provider>
  </React.StrictMode>
)