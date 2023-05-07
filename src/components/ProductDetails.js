import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ProductsContextProvider } from '../context/ProductsContext';
import styles from '../styles/ProductDetails.module.css';

const ProductDetails = (props) => {
    const id = props.match.params.id;
    const data = useContext(ProductsContextProvider);
    const productData = data[id - 1];
    const { image, title, category, description, price } = productData;

    return (
        <div className={styles.container}>
            <img src={image} alt='product' />
            <h2> {title} </h2>
            <p> {description} </p>
            <p> Category: {category} </p>
            <h3> {price} $ </h3>

            <div className={styles.btnLink}>
                <Link to='/products'> Back to Shop </Link>
            </div>
        </div>
    );
}

export default ProductDetails;