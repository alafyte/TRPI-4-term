import React from 'react';
//@ts-ignore
import styles from '../styles/Search.module.css'
import {SearchProps} from "../types/PropsTypes";

const SearchBar = ({ShowStocked, Search} : SearchProps) => {
    return (
        <form>
            <input
                onChange={Search}
                className={styles.inputSearch}
                type="text"
                placeholder="Search..."
            />
            <p>
                <input
                    onChange={ShowStocked}
                    className={styles.inputCheckBox}
                    type="checkbox"
                    name="onStock"
                    id="onStock"
                />
                <label htmlFor="onStock"></label>
                <span className={styles.productsInStock}>
                Only show products in stock
                </span>
            </p>
        </form>
    );
};

export default SearchBar;