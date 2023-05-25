
export enum EmploymentType {
    FullEmployment = "Полная занятость",
    PartTimeEmployment = "Частичная занятость",
    ProjectWork = "Проектная работа",
    Internship = "Стажировка",
}
export enum WorkingExperience {
    NoExperience = "Нет опыта",
    From1To3 = "От 1 года до 3 лет",
    From3To6 = "От 3 до 6 лет",
    MoreThan6 = "Более 6 лет",
}
export enum Schedule {
    FullTime = "Полный день",
    FlexibleHours = "Гибкий график",
    DistantWork = "Удаленная работа",
}
export type func = (...args: any[]) => any;

//---- Models types
export type VacancyInfo = {
    id: number,
    logo : string,
    companyName : string,
    jobName : string,
    city : string,
    tags : string[],
    isFavorite : boolean,
    dateAdded: string,
    isSelected : boolean,
    description : jobDescription
}

export type jobDescription = {
    salaryFrom: number,
    salaryTo: number,
    description : string,
    schedule: Schedule,
    employmentType: EmploymentType,
    workingExperience: WorkingExperience
}
export type FiltersType = {
    locationFilter: string,
    scheduleFilter: Schedule | string,
    employmentTypeFilter: EmploymentType | string,
    workingExperienceFilter: WorkingExperience | string,
    salaryFilter: number,
    tagsFilter: string
}
export const defaultFilters : FiltersType = {
    locationFilter: "",
    scheduleFilter: "",
    employmentTypeFilter: "",
    workingExperienceFilter: "",
    salaryFilter: 150000,
    tagsFilter: "",
}
//---- Actions types

export type visibilityFilterActionType = {
    type : string,
    filter: string,
    filterValues?: FiltersType
}
export type vacancyActionType = {
    type: string,
    id: number
}
//---- State types
export type filtersStateType = {
    filter: string,
    filterValues: FiltersType
}
export type stateType = {
    vacancies: VacancyInfo[],
    visibilityFilter: filtersStateType,
}