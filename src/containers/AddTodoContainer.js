import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/actions';


const AddTodoContainer = ({ dispatch }) => {
	let input;
	debugger

	return (
		<div>
			<form
				onSubmit={e => { 
					debugger
					e.preventDefault();
					debugger

					if (!input.value.trim()) {																						// ?
						debugger
						return;
					}

					dispatch(addTodo(input.value));																				// ? how does submit callback magically have access to input html element if it hasn't been set/passed in?
					input.value = '';
				}}
			>
			<input ref={node => input = node} />
			<button type="submit">ADD TODO</button>
			</form>
		</div>
	);
}

export default connect()(AddTodoContainer);
