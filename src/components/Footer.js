import React from 'react';
import FilterLinkContainer from '../containers/FilterLinkContainer';
import { VisibilityFilters } from '../actions';

const Footer = () => {
  return (
		<p>
			Show: <FilterLink filter={VisibilityFilters.SHOW_ALL}>ALL</FilterLink>
			{', '}
			Show: <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
			{', '}
			Show: <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>Completed</FilterLink>
		</p>
	);
}

export default Footer;