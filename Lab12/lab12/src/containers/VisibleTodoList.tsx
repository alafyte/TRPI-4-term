import { connect } from 'react-redux';
import { toggleTodo } from '../actions';
import TodoList from '../components/TodoList';
import { VisibilityFilters } from '../actions';
import {func, stateType, todo} from "../types";

const getVisibleTodos = (todos : todo[], filter : string) => {
    switch (filter) {
        case VisibilityFilters.SHOW_ALL:
            return todos;
        case VisibilityFilters.SHOW_COMPLETED:
            return todos.filter((t) => t.completed);
        case VisibilityFilters.SHOW_ACTIVE:
            return todos.filter((t) => !t.completed);
        default:
            throw new Error('Unknown filter: ' + filter);
    }
};

const mapStateToProps = (state : stateType) => ({
    todos: getVisibleTodos(
        state.todos,
        state.visibilityFilter
    ),
});

const mapDispatchToProps = (dispatch : func) => ({
    toggleTodo: (id : number) => dispatch(toggleTodo(id)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);