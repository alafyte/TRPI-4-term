import {defaultFilters, VacancyPropsType} from "../types";
// @ts-ignore
import styles from '../styles/Vacancy.module.css';
import {useState} from "react";
import {Card, Box, IconButton, Avatar, Typography} from "@mui/material";

const Vacancy = ({OnClickSelect, OnClickFav, doFilter, info} : VacancyPropsType) => {
    let [filter, setFilter] = useState({
        locationFilter: "",
        scheduleFilter: "",
        employmentTypeFilter: "",
        workingExperienceFilter: "",
        salaryFilter: 150000,
        tagsFilter: "",});
    return (
        <Card className={styles.sectionStyle} sx={{borderRadius: '15px', boxShadow: '0 2px 15px #E1E1E1'}} style={{background: info.isSelected ? '#0070FB' : 'white'}}
                 onClick={OnClickSelect}>
            <Box className={styles.container}>
                <Box className={styles.headContainer}>
                    <Avatar className={styles.logo} srcSet={info.logo} alt="logo"/>
                    <Box className={styles.mainContainer}>
                        <Typography className={styles.companyName}>{info.companyName}</Typography>
                        <Typography className={styles.jobHeader}>{info.jobName}</Typography>
                        <Typography className={styles.location}>{info.city}</Typography>
                        <Box className={styles.tagsContainer}>
                        {
                            info.tags.map(tag => (
                                <Box className={styles.tag} onClick={(event) => {
                                    event.stopPropagation();
                                    filter.tagsFilter = tag;
                                    doFilter(filter);
                                }}><span style={{margin: 0}}>{tag}</span></Box>
                            ))
                        }
                        </Box>
                    </Box>
                </Box>
                <Box className={styles.sideContainer}>
                    <IconButton sx={{width: '20', height: '19'}}>
                        <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg"
                             onClick={(event) => {
                                 event.stopPropagation();
                                 OnClickFav();
                             }}>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10 1.66446C15.5477 -4.11405 29.418 5.99771 10
                        19C-9.41803 5.99898 4.45235 -4.11405 10 1.66446Z" style={
                                {fill: info.isFavorite ? "#DD5E5E" : "#E1E1E1"}}/>
                        </svg>
                    </IconButton>

                    <Typography className={styles.date}>{info.dateAdded}</Typography>
                </Box>
            </Box>
        </Card>
    );
}
export default Vacancy;