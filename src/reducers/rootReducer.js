import { combineReducers } from 'redux';                                        
import todosReducer from './todosReducer';
import visibilityFilterReducer from './visibilityFilterReducer';

// - combineReducers takes in an object, where each value is a different reducing function
// - ? returns a function that calls every child reducer and gathers (hence the name reduce like the reducing function)
//   results into a single state object
const rootReducer = combineReducers({
  todos: todosReducer,
  visibilityFilter: visibilityFilterReducer,
});
         
console.log(rootReducer);                                                       // won't be logged until all debuggers have been hit

export default rootReducer;

// rootReducer ==
// function myCombineReducers(state={}, action) {
//   return {
//     visibilityFilter: visibilityFilter(state.visibilityFilter, action),
//     todos: todos(state.todos, action)
//   }
// }

// const reducer = combineReducers({                                            // values are reducers
//   a: doSomethingWithA,         
//   b: processB,
//   c: c
// })

// Global Store/State should look like this:
// {
//   visibilityFilter: 'SHOW_ALL',
//   todos: [
//       {
//         text: 'Consider using Redux',
//         completed: true,
//         id: 0
//       },
//       {
//         text: 'Keep all state in a single tree',
//         completed: false,
//         id: 1
//       }
//     ]
// }