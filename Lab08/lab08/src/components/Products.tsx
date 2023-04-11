import React from 'react';
import {ListProps} from "../types/PropsTypes";
import ProductItem from "../components/Product";
//@ts-ignore
import styles from "../styles/App.module.css"

const Products = ({products, Show}: ListProps) => {
    return (
        <div className={styles.container}>
            {products.map((Product) => <ProductItem product={Product} Show={Show} key={Product.id}/>)}
        </div>
    );

};

export default Products;