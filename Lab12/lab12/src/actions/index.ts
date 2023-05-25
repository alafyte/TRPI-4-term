import {todoActionType, setVisibilityActionType} from "../types";

let nextTodoId = 0;
export const addTodo = (text : string) : todoActionType => ({
    type: 'ADD_TODO',
    id: nextTodoId++,
    text,
});

export const setVisibilityFilter = (filter : string) : setVisibilityActionType => ({
    type: 'SET_VISIBILITY_FILTER',
    filter,
});

export const toggleTodo = (id : number) : todoActionType => ({
    type: 'TOGGLE_TODO',
    id,
});

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE',
};