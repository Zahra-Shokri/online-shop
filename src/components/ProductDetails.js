import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../hooks/useTitle.js';

// Context
import { ProductsContextProvider } from '../context/ProductsContext';

// Styles
import styles from '../styles/ProductDetails.module.css';


const ProductDetails = (props) => {
    useTitle('Product Details Page');

    const id = props.match.params.id;
    const data = useContext(ProductsContextProvider);
    const productData = data[id - 1];
    const { image, title, category, description, price } = productData;

    return (
        <div className={styles.container}>
            <div className={styles.productDetailPanel}>
                <img src={image} alt='product' />
                
                <div className={styles.productDetailContent}>
                    <h2> {title} </h2>
                    <p> {description} </p>
                    <span> Category: </span> <span> {category} </span>

                    <div className={styles.footerBtns}>
                        <p> {price} $ </p>
                        <Link to='/products'> Back to Shop </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;