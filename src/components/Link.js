import React from 'react';
// import PropTypes from 'prop-types';


const Link = ({ active, children, onClick }) => {																// ? where is children coming from?
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