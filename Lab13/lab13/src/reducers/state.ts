import {defaultFilters, EmploymentType, filtersStateType, Schedule, VacancyInfo, WorkingExperience} from "../types";
import {VisibilityFilters} from "../actions";

export const initialStateVacancies : VacancyInfo[] = [{
        id: 1,
        logo: require("../resources/image 20.png"),
        companyName: "Интернет Люди",
        jobName: "Front-end Разработчиĸ",
        city: "Минск",
        tags: ["JQuery", "JavaScript", "CSS3", "React", "Git", "Vue", 'Flexbox', 'HTML5'],
        isFavorite: true,
        dateAdded: "29/03/2021",
        isSelected: false,
        description: {
            salaryFrom:  150000,
            salaryTo: 300000,
            description: "...",
            schedule: Schedule.FullTime,
            employmentType: EmploymentType.FullEmployment,
            workingExperience: WorkingExperience.From3To6,
        }}, {
        id: 2,
        logo: require("../resources/logo.png"),
        companyName: "GOOD CALL DEVELOPMENT",
        jobName: "React Developer (Middle/Senior)",
        city: "Москва",
        tags: ["JQuery", "JavaScript", "CSS3", "React", "Git",],
        isFavorite: false,
        dateAdded: "29/03/2021",
        isSelected: false,
        description: {
            salaryFrom:  120000,
            salaryTo: 170000,
            description: "...",
            schedule: Schedule.DistantWork,
            employmentType: EmploymentType.PartTimeEmployment,
            workingExperience: WorkingExperience.From1To3,
        }}, {
        id: 3,
        logo: require("../resources/winfinity.png"),
        companyName: "Winfinity",
        jobName: "Frontend developer (React)",
        city: "Москва",
        tags: ["JQuery", "JavaScript",],
        isFavorite: true,
        dateAdded: "29/03/2021",
        isSelected: true,
        description: {
            salaryFrom:  120000,
            salaryTo: 170000,
            description: "...",
            schedule: Schedule.FlexibleHours,
            employmentType: EmploymentType.ProjectWork,
            workingExperience: WorkingExperience.MoreThan6,
        }}, {
        id: 4,
        logo: require("../resources/diagnocat.png"),
        companyName: "Diagnocat",
        jobName: "Frontend developer",
        city: "Москва",
        tags: ["JQuery", "JavaScript", "CSS3", "React", "Git", "Vue", 'Flexbox', 'HTML5'],
        isFavorite: false,
        dateAdded: "29/03/2021",
        isSelected: false,
        description: {
            salaryFrom:  100000,
            salaryTo: 150000,
            description: "...",
            schedule: Schedule.FlexibleHours,
            employmentType: EmploymentType.Internship,
            workingExperience: WorkingExperience.NoExperience,
        }}
    ]

export const initialStateFilters : filtersStateType = {
    filter: VisibilityFilters.SHOW_ALL,
    filterValues: defaultFilters
}
