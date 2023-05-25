import React from 'react';
import {todoPropsType} from "../types";

const Todo = ({ onClick, completed, text } : todoPropsType) => (
    <li
        onClick={onClick}
        style={{
            textDecoration: completed ? 'line-through' : 'none',
        }}
    >
        {text}
    </li>
);


export default Todo;