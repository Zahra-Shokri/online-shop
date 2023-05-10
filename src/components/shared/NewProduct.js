import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

// Context
import { CartContextProvider } from '../../context/CartContext';

// Functions
import { shorten, isInCart, quantityCounter } from '../../functions/allFUNs';

// Styles
import styles from '../../styles/NewProduct.module.css';
import styles2 from '../../styles/common.module.css';

// Icon
import trashIcon from '../../images/icon/trash.svg';


const NewProduct = ({ data }) => {
    const {state, dispatch} = useContext(CartContextProvider);
    
    return(
        <div className={styles.container}>
            <img src={data.image} alt='products' />
            <h3> {shorten(data.title)} </h3>
            <p className={styles.productPrice}> {data.price} $ </p>

            <div className={styles.footerBtns}>
                <Link to={ `/products/${data.id}` }>Details</Link>

                {
                    (quantityCounter(state, data.id) === 1) && 
                        <button className={styles2.trashBtn} onClick={() => dispatch({type: 'REMOVE_ITEM', payload: data})}> <img src={trashIcon} alt='Trash Icon' /> </button>                    
                }
                {
                    (quantityCounter(state, data.id) > 1) && 
                        <button className={styles2.decBtn} onClick={() => dispatch({type: 'DECREASE', payload: data})}> - </button>
                }

                {
                    (isInCart(state, data.id))?
                        <button className={styles2.incBtn} onClick={() => dispatch({type: 'INCREASE', payload: data})}> + </button> : 
                        <button className={styles.addItemBtn} onClick={() => dispatch({type: 'ADD_ITEM', payload: data})}> Add to Cart </button> 
                }
            </div>
        </div>
    );
}

export default NewProduct;