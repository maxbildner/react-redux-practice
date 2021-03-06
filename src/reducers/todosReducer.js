import {
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_TODO,
} from '../actions/actions';

// TODOS REDUCER
// this slice of state is an array of objects (todos)
const todosReducer = (state = [], action) => {
  debugger

  switch (action.type) {
    case ADD_TODO:
      debugger

      return [
        ...state,
          {                                                                     // add new object/todo to array slice of state
            id: action.id,
            text: action.text,
            completed: false
          }
      ];

    case TOGGLE_TODO:                                                           // toggling means changing its completed/not completed status
      debugger

      // loop through todos array, and if we have a match for action.index, flip the completed value true/false
      return state.map( todo => {                                               // return new array where the todo that matches that action.id, completed status is changed
        return ((todo.id === action.index) ? { ...todo, completed: !todo.completed } : todo)
      });

    case REMOVE_TODO:
      debugger

      return state.filter( todo => {
        return todo.id !== action.index;
      });

    default:
      debugger
      return state;
  }
};

export default todosReducer;

// todos slice of state looks like this:
// state = [
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