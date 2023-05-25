import {func, stateType, VacancyInfo} from "../types";
import {selectVacancy, toggleVacancy, VisibilityFilters} from "../actions";
import {connect} from "react-redux";
import VacanciesList from "../components/VacanciesList";
import vacancies from "../reducers/vacancies";
import visibilityFilter from "../reducers/visibilityFilter";

const getVisibleVacancies = (vacancies : VacancyInfo[], filter : string = VisibilityFilters.SHOW_ALL)
    : VacancyInfo[] => {
    switch (filter) {
        case VisibilityFilters.SHOW_ALL:
            return vacancies;
        case VisibilityFilters.SHOW_FAVORITES:
            return vacancies.filter((t) => t.isFavorite);
        default:
            throw new Error('Unknown filter: ' + filter);
    }
};
const mapStateToProps = (state : stateType) => ({
    vacancies : getVisibleVacancies(state.vacancies, state.visibilityFilter),
});
const mapDispatchToProps = (dispatch : func) => ({
    toggleVacancy : (id : number) => dispatch(toggleVacancy(id)),
    selectVacancy : (id : number) => dispatch(selectVacancy(id)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(VacanciesList);