import React from 'react';
// import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import 'bootstrap/dist/js/bootstrap.min.js'
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import { createRoot } from 'react-dom/client';
import Category from './pages/Category';
import Expenses from './pages/Expenses';
import Reports from './pages/Reports';
import { Provider } from 'react-redux';
import { store } from './app/store';
import axios from 'axios';

const container = document.getElementById('root');
const root = createRoot(container, +  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "category",
    element: <Category/>
  },
  {
    path: "expenses",
    element: <Expenses/>
  },
  {
    path: "reports",
    element: <Reports/>
  },
]);



root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
