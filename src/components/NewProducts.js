import React, { useContext } from 'react';
import useTitle from '../hooks/useTitle.js';

// Components
import NewProduct from './shared/NewProduct';

// Styles
import styles from '../styles/NewProducts.module.css';

// Context
import { ProductsContextProvider } from '../context/ProductsContext';


const NewProducts = () => {
    useTitle('Products Page');

    const productsData = useContext(ProductsContextProvider);
    
    return(
        <div className={styles.container}>
            { productsData.map(product => <NewProduct key={product.id} data={product} />) }
        </div>
    );
}

export default NewProducts;