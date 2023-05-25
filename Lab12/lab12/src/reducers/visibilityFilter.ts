import { VisibilityFilters } from '../actions';
import {setVisibilityActionType} from "../types";

const visibilityFilter = (state : string = VisibilityFilters.SHOW_ALL, action : setVisibilityActionType) => {
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER':
            return action.filter;
        default:
            return state;
    }
};

export default visibilityFilter;