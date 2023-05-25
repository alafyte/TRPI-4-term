import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';
import {addTodoPropsType} from "../types";

const AddTodo = ({ dispatch } : addTodoPropsType) => {
    let input : HTMLInputElement | null;

    return (
        <div>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    if (input !== null) {
                        if (!input.value.trim()) {
                            return;
                        }
                        dispatch(addTodo(input.value));
                        input.value = '';
                    }
                }}
            >
                <input ref={(node) => (input = node)} />
                <button type="submit">Add Todo</button>
            </form>
        </div>
    );
};

export default connect()(AddTodo);