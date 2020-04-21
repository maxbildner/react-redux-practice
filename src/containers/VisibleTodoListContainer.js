import { connect } from 'react-redux';
import { toggleTodo } from '../actions/actions';
import TodoList from '../components/TodoList';                                  // presentational component that this container is connecting the store to
import { VisibilityFilters } from '../actions/actions';

// this is the function we're giving the presentational component access to
const getVisibleTodos = (todos, filter) => {
	// debugger

  switch (filter) {
		case VisibilityFilters.SHOW_ALL:
			return todos;
		case VisibilityFilters.SHOW_COMPLETED:
			return todos.filter(t => t.completed);
		case VisibilityFilters.SHOW_ACTIVE:
			return todos.filter(t => !t.completed);
		default:
			throw new Error('Unknown filter: ' + filter);
	}
}

const mapStateToProps = state => {
	debugger

	return ({
		todos: getVisibleTodos(state.todos, state.visibilityFilterReducer)
	});
}

const mapDispatchToProps = dispatch => {
	debugger
	
	return ({
		toggleTodo: id => dispatch(toggleTodo(id))
	});
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);

