import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App/App.tsx';

// Find your root element (e.g., document.getElementById('root'))
const rootElement = document.getElementById('root');

// Use ReactDOM.render to render your app inside the Router
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  rootElement
);
