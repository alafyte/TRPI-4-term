import vacancies from "../vacancies";
import {initialStateFilters, initialStateVacancies} from "../state";
import {cancelSelection, selectVacancy, setVisibilityFilter, toggleVacancy, VisibilityFilters} from "../../actions";
import visibilityFilter from "../visibilityFilter";
import {defaultFilters, EmploymentType, Schedule, WorkingExperience} from "../../types";

test('Toggle vacancy - Test #1', () => {
    const actualState = vacancies(initialStateVacancies, toggleVacancy(2));
    expect(actualState.length).toEqual(4);
    expect(actualState[1].isFavorite).toBeTruthy();
})

test('Toggle vacancy - Test #2', () => {
    const actualState = vacancies(initialStateVacancies, toggleVacancy(3));
    expect(actualState.length).toEqual(4);
    expect(actualState[1].isFavorite).toBeFalsy();
})

test('Toggle Vacancy - Test #3', () => {
    const actualState = vacancies([], toggleVacancy(3));
    expect(actualState.length).toEqual(0)
    expect(actualState).toEqual([]);
})
test('Select vacancy - Test #4', () => {
    const actualState = vacancies(initialStateVacancies, selectVacancy(1));
    expect(actualState.length).toEqual(4);
    expect(actualState[0].isSelected).toBeTruthy();
    expect(actualState[2].isSelected).toBeFalsy();
})

test('Select vacancy - Test #5', () => {
    const actualState = vacancies(initialStateVacancies, selectVacancy(3));
    expect(actualState.length).toEqual(4);
    expect(actualState).toEqual(initialStateVacancies);
})

test('Cancel selection - Test #6', () => {
    const actualState = vacancies(initialStateVacancies, cancelSelection(3));
    expect(actualState.length).toEqual(4);
    expect(actualState[0].isSelected).toBeFalsy();
})

test('Cancel selection - Test #7', () => {
    const actualState = vacancies(initialStateVacancies, cancelSelection(1));
    expect(actualState.length).toEqual(4);
    expect(actualState).toEqual(initialStateVacancies);
})

test('Set filter - Test #8', () => {
    const actualState = visibilityFilter(initialStateFilters,
        setVisibilityFilter(VisibilityFilters.SHOW_FILTERS, {
            locationFilter: 'Минск',
            scheduleFilter: Schedule.FlexibleHours,
            employmentTypeFilter: EmploymentType.Internship,
            workingExperienceFilter: WorkingExperience.NoExperience,
            salaryFilter: 120000,
            tagsFilter: ''}));
    expect(actualState).toEqual({filter: VisibilityFilters.SHOW_FILTERS, filterValues: {
            locationFilter: 'Минск',
            scheduleFilter: Schedule.FlexibleHours,
            employmentTypeFilter: EmploymentType.Internship,
            workingExperienceFilter: WorkingExperience.NoExperience,
            salaryFilter: 120000,
            tagsFilter: ''
        }});
})

test('Set filter - Test #9', () => {
    const actualState = visibilityFilter(initialStateFilters, setVisibilityFilter(VisibilityFilters.SHOW_ALL));
    expect(actualState).toEqual({filter: VisibilityFilters.SHOW_ALL, filterValues: defaultFilters});
})

test('Set filter - Test #10', () => {
    const actualState = visibilityFilter(initialStateFilters,
        {type: 'Unknown filter', filter: VisibilityFilters.SHOW_ALL});
    expect(actualState).toEqual(initialStateFilters);
})

export {}