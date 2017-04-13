import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './reset.css';
import './style.css';

// Render App component into div#root after the DOM has loaded.
document.addEventListener('DOMContentLoaded', () => {
  const rootEl = document.getElementById('root');
  ReactDOM.render(<App />, rootEl);
})
