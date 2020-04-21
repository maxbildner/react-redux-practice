import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions/actions';
import Link from '../components/Link';

const mapStateToProps = (state, ownProps) => {
	return (
		{
			active: ownProps.filter === state.setVisibilityFilter
		}
	);
}

const mapDispatchToProps = (dispatch, ownProps) => ({
	onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
});

export default connect(mapStateToProps, mapDispatchToProps)(Link);