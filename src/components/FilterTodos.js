import React from 'react';
import FilterLinkContainer from '../containers/FilterLinkContainer';
import { VisibilityFilters } from '../actions/actions';

const FilterTodos = () => {
	debugger

  return (
		<div className="filter-todos-wrap">
			<span>SHOW: </span>
			<FilterLinkContainer filter={VisibilityFilters.SHOW_ALL}>ALL</FilterLinkContainer>
			<FilterLinkContainer filter={VisibilityFilters.SHOW_ACTIVE}>ACTIVE</FilterLinkContainer>
			<FilterLinkContainer filter={VisibilityFilters.SHOW_COMPLETED}>COMPLETED</FilterLinkContainer>
		</div>
	);
}

export default FilterTodos;