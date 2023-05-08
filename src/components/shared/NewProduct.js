import React from 'react';
import { Link } from "react-router-dom";
import { shorten } from '../../functions/shorten';
import styles from '../../styles/NewProduct.module.css';

const NewProduct = ({ data }) => {
    return(
        <div className={styles.container}>
            <img src={data.image} alt='products' />
            <h3> {shorten(data.title)} </h3>
            <p> {data.price} $ </p>

            <div className={styles.footerBtns}>
                <Link to={ `/products/${data.id}` }>Details</Link>
                <button> Add to Cart </button>
            </div>
        </div>
    );
}

export default NewProduct;