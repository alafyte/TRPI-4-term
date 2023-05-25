import React from 'react';
import {linkPropsType} from "../types";

const Link = ({ active, children, onClick } : linkPropsType) => (
    <button
        onClick={onClick}
        disabled={active}
        style={{
            marginLeft: '4px',
        }}
    >
        {children}
    </button>
);


export default Link;