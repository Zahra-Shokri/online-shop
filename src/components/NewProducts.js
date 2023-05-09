import React, { useContext } from 'react';
import NewProduct from './shared/NewProduct';
import styles from '../styles/NewProducts.module.css';

import { ProductsContextProvider } from '../context/ProductsContext';

const NewProducts = () => {
    const productsData = useContext(ProductsContextProvider);
    
    return(
        <div className={styles.container}>
            { productsData.map(product => <NewProduct key={product.id} data={product} />) }
        </div>
    );
}

export default NewProducts;