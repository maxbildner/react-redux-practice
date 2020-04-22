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
	switch (action.type) {
		case SET_VISIBILITY_FILTER:
			return action.filter																											// new state
		default:
			return state
	}
}


export default visibilityFilterReducer;