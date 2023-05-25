//----- actions types ----------------

import {ReactNode} from "react";

export type todoActionType = {
    type: string,
    id: number,
    text?: string
}

export type setVisibilityActionType = {
    type: string,
    filter: string
}

export type func = (...args: any[]) => any;

//------- Models types  ---------------------------
export type todo = {
    id: number,
    text: string,
    completed : boolean
}

//--------- Props types --------------
export type addTodoPropsType = {
    dispatch: func,
}

export type linkPropsType = {
    active: boolean,
    children: ReactNode,
    onClick : func
}

export type todoPropsType = {
    onClick: func,
    completed: boolean,
    text: string,
}

export type todoListPropsType = {
    todos: todo[],
    toggleTodo: func,
}

//----- State type  --------------------
export type stateType = {
    todos: todo[],
    visibilityFilter: string,
}
export type ownPropsType = {
    filter: string,
}

