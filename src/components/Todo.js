import React from 'react';
// import PropTypes from 'prop-types';                                             // ?

// Presentational (stateless) component
const Todo = ({ handleClickTodo, completed, text}) => {
	debugger
	
	return (
		<li className="todo-li"
			onClick={handleClickTodo}
			style={{textDecoration: completed ? 'line-through' : 'none'}}
		>
			{text}
		</li>
	);
}

export default Todo;
