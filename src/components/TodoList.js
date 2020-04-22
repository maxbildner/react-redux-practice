import React from 'react';
// import PropTypes from 'prop-types';
import Todo from './Todo';


// presentational component returns a <ul> with an array of all the Todo subcomponents
const TodoList = ({ todos, toggleTodo }) => {
	debugger

	return (
		<ul>
			{todos.map((todo, idx) => {
				debugger

				return (
					<Todo key={todo.id} {...todo} handleClickTodo={() => toggleTodo(todo.id)}/>
				);
			})}
		</ul>
		);
}

export default TodoList;