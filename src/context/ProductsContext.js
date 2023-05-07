import React, { createContext, useState, useEffect } from 'react';
import { getProductsData } from '../service/api';


export const ProductsContextProvider = createContext();

const ProductsContext = ({ children }) => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setProduct(await getProductsData());
        }

        fetchAPI();
    }, [])

    return(
        <ProductsContextProvider.Provider value={product}>
            { children }
        </ProductsContextProvider.Provider>
    );
}

export default ProductsContext;