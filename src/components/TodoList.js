import React from 'react';
// import PropTypes from 'prop-types';
import Todo from './Todo';


// presentational component returns a <ul> with an array of all the Todo subcomponents
const TodoList = ({ todos, toggleTodo, removeTodo }) => {
	debugger

	return (
		<ul className="todo-list">
			{todos.map((todo) => {
				debugger

				return (
					<div className="todo-wrap" key={todo.id}>
						<Todo key={todo.id} {...todo} handleClickTodo={() => toggleTodo(todo.id)}/>
						<button onClick={() => removeTodo(todo.id)} className="delete-todo">DELETE</button>
					</div>
				);
			})}
		</ul>
		);
}

export default TodoList;