import { 
	SET_VISIBILITY_FILTER,
	VisibilityFilters
} from '../actions/actions';


// REDUCERS
// - take in a previous state, and an action
// - returns new state
// - never mutate state
// - the state input/param is different for every reducer! 

function visibilityFilterReducer(state = VisibilityFilters.SHOW_ALL, action) {
	debugger
	
	switch (action.type) {
		case SET_VISIBILITY_FILTER:
			return Object.assign({}, state, {																					// Object assign returns new object where 2nd arg is copied into first arg target
				visibilityFilter: action.filter
			});
		default:
			return state
	}
}


export default visibilityFilterReducer;