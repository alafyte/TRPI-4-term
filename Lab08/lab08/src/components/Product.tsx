import React from 'react';
import {ProductType} from "../types/PropsTypes";
// @ts-ignore
import styles from '../styles/Product.module.css';



const ProductItem = ({product, Show} : ProductType) => {
    if (Show) {
        if (product.stocked) {
            return (
                <div className={styles.productContainer}>
                    <h3 className={styles.productName}>{product.name}</h3>
                    <img srcSet={product.image} alt="" className={styles.productImage}/>
                    <p className={styles.price}>{product.price}</p>
                </div>
            );
        }
        else {
            return (
                <div></div>
            )
        }
    }
    else {
        return (
            <div className={styles.productContainer}>
                <h3 className={styles.productName}>{product.name}</h3>
                <img srcSet={product.image} alt="" className={styles.productImage}/>
                <p className={styles.price}>{product.price}</p>
            </div>
        )
    }
};

export default ProductItem;