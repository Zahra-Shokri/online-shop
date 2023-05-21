import React, { useContext } from 'react';

// Context
import { CartContextProvider } from '../../context/CartContext';

// Functions
import { shorten } from '../../functions/allFUNs';

// Style
import styles from '../../styles/ShopCart.module.css';
import styles2 from '../../styles/common.module.css';

// Icons
import trashIcon from '../../images/icon/trash.svg';


const ShopCart = ({data}) => {
    const {image, title, price, quantity} = data;
    const {dispatch} = useContext(CartContextProvider);

    return(
        <div className={styles.container}>
            <div className={styles.cartContainer}>
                <img src={image} className={styles.productImg} alt='product' />
                
                <div className={styles.cartName_Price}>
                    <p> {shorten(title)} </p>
                    <p> {price} $ </p>
                </div>

                <div className={styles.quantity}>
                    <p> {quantity} </p>
                </div>

                <div className={styles.cartBtns}>
                    {
                        (quantity === 1) ?
                        <button className={styles2.trashBtn} onClick={() => dispatch({type: 'REMOVE_ITEM', payload: data})}> <img src={trashIcon} alt='Trash Icon' /> </button> : 
                        <button className={styles2.decBtn} onClick={() => dispatch({type: 'DECREASE', payload: data})}> - </button>       
                    }
                    <button className={styles2.incBtn} onClick={() => dispatch({type: 'INCREASE', payload: data})}> + </button>
                </div>
            </div>
        </div>
    );
}

export default ShopCart;