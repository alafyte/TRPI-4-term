import {VacanciesListPropsType} from "../types";
import Vacancy from "./Vacancy";
//@ts-ignore
import styles from "../styles/VacanciesList.module.css"
import {Typography} from "@mui/material";

const VacanciesList = ({ vacancies, toggleVacancy, selectVacancy, doFilter } : VacanciesListPropsType) => {
    if(vacancies.length !== 0)
    {
        return (
            <ul className={styles.list}>
                {
                    vacancies.map((v) =>
                        <Vacancy key={v.id} OnClickSelect={() => selectVacancy(v.id)}
                                 doFilter={doFilter}
                                 OnClickFav={() => toggleVacancy(v.id)} info={v}/>)
                }
            </ul>
        );
    }
    else {
        return (
            <Typography fontFamily={"'Montserrat', sans-serif"} className={styles.nothingFound}>Ничего не найдено</Typography>
        );
    }
}
export default VacanciesList;