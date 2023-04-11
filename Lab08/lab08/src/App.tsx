import React, {useState} from 'react';
import PRODUCTS from "./states/products";
import SearchBar from "./components/SearchBar";
//@ts-ignore
import styles from "./styles/App.module.css"
import Products from "./components/Products";

const App = () => {
    const [Show, setShow] = useState(false);
    const [ArrayFilter, setArrayFilter] = useState(PRODUCTS)
    const ShowStocked = (event: React.ChangeEvent<HTMLInputElement>) => {
        Show ? setShow(false) : setShow(true)
    }

    const Search = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.value.toLowerCase() !== '') {
            setArrayFilter(PRODUCTS.filter((Product) =>
                Product.name.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1))
        }
        else {
            setArrayFilter(PRODUCTS)
        }
    }
    return (
        <div className="App">
            <div className={styles.container}>
                <SearchBar ShowStocked={ShowStocked} Search={Search}/>
            </div>
            {
                ArrayFilter.length !== 0 ? <Products products={ArrayFilter} Show={Show}/> : <div className={styles.container}>
                <p className={styles.EmptyProducts}>Products not found</p></div>
            }
        </div>
    );
};

export default App;