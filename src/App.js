import React from 'react';
// import { render } from 'react-dom';                                             // ?
import { Provider } from 'react-redux';                                         // NAMED EXPORT requires curly's
import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer';


function App() {

  const store = createStore(rootReducer);

  return (
    <Provider store={store}>
      <div className="App">
        {/* COMPONENTS HERE */}
      </div>
    </Provider>
  );
}

export default App;
