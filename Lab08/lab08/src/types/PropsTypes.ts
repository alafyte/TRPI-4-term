import IProduct from "./productsType";
import React from "react";

export type ProductType = {
    product: IProduct;
    Show: boolean;
}
type Func = (event: React.ChangeEvent<HTMLInputElement>) => void;
export type SearchProps = {
    ShowStocked: Func;
    Search: Func;
}
export type ListProps = {
    products: IProduct[];
    Show: boolean;
}
