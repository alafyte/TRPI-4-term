import {filtersStateType, visibilityFilterActionType} from "../types";
import {initialStateFilters} from "./state";

const visibilityFilter = (state : filtersStateType = initialStateFilters, action : visibilityFilterActionType) => {
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER':
            return {filter: action.filter, filterValues: action.filterValues};
        default:
            return state;
    }
}
export default visibilityFilter;