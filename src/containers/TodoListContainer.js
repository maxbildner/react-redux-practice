import { connect } from 'react-redux';
import { toggleTodo, removeTodo } from '../actions/actions';
import TodoList from '../components/TodoList';                                  // presentational component that this container is connecting the store to
import { VisibilityFilters } from '../actions/actions';

// this is the function we're giving the presentational component access to
const getVisibleTodos = (todos, filter) => {
	debugger

  switch (filter) {
		case VisibilityFilters.SHOW_ALL:
			debugger
			return todos;

		case VisibilityFilters.SHOW_COMPLETED:
			debugger
			return todos.filter(t => t.completed);

		case VisibilityFilters.SHOW_ACTIVE:
			debugger
			return todos.filter(t => !t.completed);
		
		default:
			debugger
			throw new Error('Unknown filter: ' + filter);
	}
}

const mapStateToProps = state => {
	debugger

	return ({
		todos: getVisibleTodos(state.todos, state.visibilityFilter)
	});
}

const mapDispatchToProps = dispatch => {
	debugger

	return ({
		toggleTodo: id => dispatch(toggleTodo(id)),
		removeTodo: id => dispatch(removeTodo(id))
	});
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);

