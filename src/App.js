import React from 'react';
import { Provider } from 'react-redux';                                         // NAMED EXPORT requires curly's. ex. = export const rootReducer
import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer';                               // DEFAULT EXPORT ex. = export default rootReducer
import AddTodoContainer from './containers/AddTodoContainer';
import TodoListContainer from './containers/TodoListContainer';
import FilterTodos from './components/FilterTodos';

function App() {

  debugger
  const store = createStore(rootReducer);                                       // creates the redux store (object) of the entire app
  debugger

  return (
    // Provider makes the redux store available to al nested components wrapped in connect()
    <Provider store={store}> 
      <div className="app-wrap">
        <AddTodoContainer />                                                      
        <FilterTodos />
        <TodoListContainer />
      </div>                                                   
    </Provider>
  );
}

export default App;
