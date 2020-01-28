import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


// ENTRY FILE
// Wait for DOM to load, then execute callback
document.addEventListener('DOMContentLoaded', ()=> {

  // grab root html element from index.html
  const root = document.getElementById('root');

  // Render App component inplace of the root element
  ReactDOM.render(<App />, root);
});

