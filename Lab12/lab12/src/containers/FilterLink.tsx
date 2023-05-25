import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions';
import Link from "../components/Link";
import {func, ownPropsType, stateType} from "../types";

const mapStateToProps = (state : stateType, ownProps : ownPropsType) => ({
    active: ownProps.filter === state.visibilityFilter,
});

const mapDispatchToProps = (dispatch : func, ownProps : ownPropsType) => ({
    onClick: () => dispatch(setVisibilityFilter(ownProps.filter)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Link);