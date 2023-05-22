import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../hooks/useTitle.js';


// Context
import { CartContextProvider } from '../context/CartContext';

// Components
import ShopCart from './shared/ShopCart';

// Style
import styles from '../styles/ShopCartList.module.css';


const ShopCartList = () => {
    useTitle('Shop Cart Page');

    const {state, dispatch} = useContext(CartContextProvider);
    
    return(
        <div className={styles.container}>
            <div className={styles.cartContainer}>
                {
                    state.selectedItems.map(product => <ShopCart key={product.id} data={product} />)
                }
            </div>
            {
                (state.itemsCounter > 0) &&
                    <div className={styles.totalPanel}>
                        <p> <span> Total Items: </span> {state.itemsCounter} </p>
                        <p> <span> Total Payments:  </span> {state.total} $ </p> 

                        <div className={styles.totalPanelBtns}>
                            <button className={styles.clear} onClick={() => dispatch({type: 'CLEAR'})}> Clear </button>
                            <button className={styles.checkout} onClick={() => dispatch({type: 'CHECKOUT'})}> Checkout </button>
                        </div>
                    </div>
            }
            {
                (state.checkout) && 
                    <div className={styles.compelete}>
                        <h3>Checked Out Successfuly.</h3>
                        <Link to='/products'> Buy more </Link>
                    </div>
            }
            {
                (!state.checkout && state.itemsCounter === 0) && 
                    <div className={styles.compelete}>
                        <h3>Do you want to buy?</h3>
                        <Link to='/products'> Back to shop </Link>
                    </div>
            }
        </div>
    );
}

export default ShopCartList;