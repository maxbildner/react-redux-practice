import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


// ENTRY FILE
// Wait for DOM to load, then execute callback
document.addEventListener('DOMContentLoaded', ()=> {

  // grab root html element from index.html
  const root = document.getElementById('root');
  
  debugger                                                                      // ? why is this not the first debugger hit when page is refreshed? (todosReducer is hit first)

  // Render App component inplace of the root element
  ReactDOM.render(<App />, root);
});

