import {
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_TODO,
} from '../actions/actions';

// this slice of state is an array of objects (todos)
const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
          {                                                                     // add new object/todo to array slice of state
            id: action.id,
            text: action.text,
            completed: false
          }
      ];

    case TOGGLE_TODO:                                                           // toggling means changing its completed/not completed status
      return state.map( todo => {                                               // return new array where the todo that matches that action.id, completed status is changed
        return ((todo.id === action.id) ? { ...todo, completed: !todo.completed } : todo)
      });

    default:
      return state;
  }
};

export default todos;