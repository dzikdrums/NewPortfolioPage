import App from './App';
import { GlobalProvider } from './context/GlobalContext';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <Router>
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </Router>,
  document.getElementById('root')
);
