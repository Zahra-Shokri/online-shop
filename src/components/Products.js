import React, { useContext } from 'react';
import Product from './shared/Product';
import styles from '../styles/Products.module.css';

import { ProductsContextProvider } from '../context/ProductsContext';

const Products = () => {
    const productsData = useContext(ProductsContextProvider);
    
    return(
        <div className={styles.container}>
            { productsData.map(product => <Product key={product.id} data={product} />) }
        </div>
    );
}

export default Products;