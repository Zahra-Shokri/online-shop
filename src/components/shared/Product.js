import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContextProvider } from '../../context/CartContext';
import { shorten, isInCart, quantityCounter } from '../../functions/allFUNs';
import styles from '../../styles/Product.module.css';
import trashIcon from '../../images/icon/trash.svg';

const Product = ({ data }) => {
    const {state, dispatch} = useContext(CartContextProvider);
    
    return(
        <div className={styles.container}>
            <img src={data.image} alt='products' />
            <h3> {shorten(data.title)} </h3>
            <p> {data.price} $ </p>

            <div className={styles.footerBtns}>
                <Link to={ `/products/${data.id}` }>Details</Link>

                {
                    (quantityCounter(state, data.id) === 1) && 
                        <button className={styles.rmItemBtn} onClick={() => dispatch({type: 'REMOVE_ITEM', payload: data})}> <img src={trashIcon} alt='Trash Icon' /> </button>                    
                }
                {
                    (quantityCounter(state, data.id) > 1) && 
                        <button className={styles.decBtn} onClick={() => dispatch({type: 'DECREASE', payload: data})}> - </button>
                }

                {
                    (isInCart(state, data.id))?
                        <button className={styles.incBtn} onClick={() => dispatch({type: 'INCREASE', payload: data})}> + </button> : 
                        <button className={styles.addItemBtn} onClick={() => dispatch({type: 'ADD_ITEM', payload: data})}> Add to Cart </button> 
                }
            </div>
        </div>
    );
}

export default Product;