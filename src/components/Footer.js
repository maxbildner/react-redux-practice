import React from 'react';
import FilterLinkContainer from '../containers/FilterLinkContainer';
import { VisibilityFilters } from '../actions/actions';

const Footer = () => {
	debugger

  return (
		<div>
			<span>SHOW: </span>
			<FilterLinkContainer filter={VisibilityFilters.SHOW_ALL}>ALL</FilterLinkContainer>
			<FilterLinkContainer filter={VisibilityFilters.SHOW_ACTIVE}>ACTIVE</FilterLinkContainer>
			<FilterLinkContainer filter={VisibilityFilters.SHOW_COMPLETED}>COMPLETED</FilterLinkContainer>
		</div>
	);
}

export default Footer;