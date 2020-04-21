import React from 'react';
// import PropTypes from 'prop-types';                                             // ?

// Presentational (stateless) component
const Todo = ({ onClick, completed, text}) => {

	return (
		<li className="todo-li"
			onClick={onClick}
			style={{textDecoration: completed ? 'line-through' : 'none'}}
		>
			{text}
		</li>
	);
}

export default Todo;
