import React from 'react';
// import PropTypes from 'prop-types';


const Link = ({ active, children, onClick }) => {																// ? where is children coming from?
	// if (active) {
	// 	return <span>{children}</span>
	// }
	// debugger
	// return (
	// 	<a
	// 		href=""
	// 		onClick={e => {
	// 			e.preventDefault()
	// 			onClick()
	// 		}}
	// 	>
	// 		{children}
	// 	</a>
	// );
	debugger

	return (
		<button
			onClick={onClick}
			disabled={active}
			style={{marginLeft:'4px'}}
		>
			{children}
		</button>
	);
}

export default Link;