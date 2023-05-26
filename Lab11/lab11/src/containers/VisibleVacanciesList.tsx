import {defaultFilters, FiltersType, func, stateType, VacancyInfo} from "../types";
import {selectVacancy, setVisibilityFilter, toggleVacancy, VisibilityFilters} from "../actions";
import {connect} from "react-redux";
import VacanciesList from "../components/VacanciesList";

export const getVisibleVacancies = (vacancies : VacancyInfo[], filter : string = VisibilityFilters.SHOW_ALL, values : FiltersType = defaultFilters) => {
    console.log(filter)
    console.log(values)
    switch (filter) {
        case VisibilityFilters.SHOW_ALL:
            return vacancies;
        case VisibilityFilters.SHOW_FAVORITES:
            return vacancies.filter((t) => t.isFavorite);
        case VisibilityFilters.SHOW_FILTERS:
            let filtered : VacancyInfo[] = vacancies;
            if(values.locationFilter !== "") {
                filtered = vacancies.filter((t) => t.city.toLowerCase().includes(values.locationFilter.toLowerCase()));
            }
            if (values.scheduleFilter !== "") {
                filtered = filtered.filter((t) => t.description.schedule === values.scheduleFilter);
            }
            if (values.employmentTypeFilter !== "") {
                filtered = filtered.filter((t) => t.description.employmentType === values.employmentTypeFilter);
            }
            if (values.workingExperienceFilter !== "") {
                filtered = filtered.filter((t) => t.description.workingExperience === values.workingExperienceFilter);
            }
            if(values.tagsFilter !== "") {
                filtered = filtered.filter((t) => t.tags.includes(values.tagsFilter));
            }
            filtered = filtered.filter((t) => t.description.salaryFrom <= values.salaryFilter && values.salaryFilter <= t.description.salaryTo);
            return filtered;
        default:
            throw new Error('Unknown filter: ' + filter);
    }
};
const mapStateToProps = (state : stateType) => ({
    vacancies : getVisibleVacancies(state.vacancies, state.visibilityFilter.filter, state.visibilityFilter.filterValues),
});
const mapDispatchToProps = (dispatch : func) => ({
    toggleVacancy : (id : number) => dispatch(toggleVacancy(id)),
    selectVacancy : (id : number) => dispatch(selectVacancy(id)),
    doFilter: (filters: FiltersType) => dispatch(setVisibilityFilter(VisibilityFilters.SHOW_FILTERS, filters)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(VacanciesList);