import React from 'react';
import FilterLinkContainer from '../containers/FilterLinkContainer';
import { VisibilityFilters } from '../actions/actions';

const Footer = () => {
  return (
		<p>
			Show: <FilterLinkContainer filter={VisibilityFilters.SHOW_ALL}>ALL</FilterLinkContainer>
			{', '}
			Show: <FilterLinkContainer filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLinkContainer>
			{', '}
			Show: <FilterLinkContainer filter={VisibilityFilters.SHOW_COMPLETED}>Completed</FilterLinkContainer>
		</p>
	);
}

export default Footer;