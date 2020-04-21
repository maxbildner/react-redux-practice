import React, { useLayoutEffect } from 'react';
// import PropTypes from 'prop-types';
import Todo from './Todo';


// presentational component returns a <ul> with an array of all the Todo subcomponents
const TodoList = ({ todos, onTodoClick }) => {
	return (
		<ul>
			{todos.map((todo, idx) => {
				return (
					<Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)}/>
				);
			})}
		</ul>
		);
}

export default TodoList;