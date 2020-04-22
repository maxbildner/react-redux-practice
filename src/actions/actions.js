// ACTIONS
// - paylods of info that we want to send to store
// - POJO (Plain Old Javascript Object)
// - must have a 'type' property
// Ex.
// action = {
//   type: ADD_TODO,
//   text: 'Walk harry'
// }


// ACTION TYPES
// - a value for an action type
// - use constants incase we have a typo, easier to debug
// Examples:
export const ADD_TODO = 'ADD_TODO';    
export const REMOVE_TODO = 'REMOVE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILTIY_FILER';

// Misc Constants
export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
};


let nextTodoId = 0;                                                             // counter for id below

// ACTION CREATORS
// - function that create (return) actions
// Ex.
export function addTodo(text) {
  debugger

  return ({
    type: ADD_TODO,
    id: nextTodoId++,
    text                                                                        // syntactic sugar for text: text
  });
}

export function toggleTodo(index) {                                             // changes todo we want to display
  debugger

  return {
    type: TOGGLE_TODO,
    index
  }
}

export function setVisibilityFilter(filter) {                                   // changes how we want to filter todos
  debugger
  
  return {
    type: SET_VISIBILITY_FILTER,
    filter
  }
}