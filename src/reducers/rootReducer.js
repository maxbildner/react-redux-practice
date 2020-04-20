import { combineReducers } from 'redux';                                        
import todos from './todos';
// import visibilityFilter from './visibilityFilter';

// - combineReducers takes in an object, where each value is a different reducing function
// - returns a function that calls every child reducer and gathers (hence the name reduce like the reducing function)
//   results into a single state object
const rootReducer = combineReducers({
  // export default rootReducer = combineReducers({
  todos,
});


export default rootReducer;