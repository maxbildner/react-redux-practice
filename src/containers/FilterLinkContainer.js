import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions/actions';
import Link from '../components/Link';

const mapStateToProps = (state, ownProps) => {																	// ownProps passed from Link component prop 
	debugger

	return ({
			active: ownProps.filter === state.visibilityFilter												
		});
}

const mapDispatchToProps = (dispatch, ownProps) => {
	debugger

	return ({
		onClick: () => dispatch(setVisibilityFilter(ownProps.filter))								// ? why don't we need to write store.dispatch? i thought dispatch was a method on the store object
	});
}

export default connect(mapStateToProps, mapDispatchToProps)(Link);