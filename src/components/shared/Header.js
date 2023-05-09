import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

// Context
import { CartContextProvider } from '../../context/CartContext';

// Style
import styles from '../../styles/Header.module.css';
// import styled from 'styled-components';

// Icons
import userProfile from '../../images/icon/user.png';
import shoppingCart from '../../images/icon/shoppingCart.png';


// const Div = styled.div`
//     display: flex;
//     padding: 10px;
//     align-items: center;
//     justify-content: space-between;
//     background-color: rgb(190, 190, 190);

//     img {
//         width: 45px;
//         margin: 0 20px;
//         border-radius: 100%;
//         background-color: rgb(214, 214, 214);
//     }

//     img:hover {
//         cursor: pointer;
//     }
// `;


const Header = () => {
    const {state} = useContext(CartContextProvider);

    return(
        <div className={styles.container}>
            <ul>
                <li> <Link to='/'> Home Page </Link> </li>
                <li> <Link to='/products'> Products </Link> </li>
                <li> <Link to='/aboutus'> About Us </Link> </li>
                <li> <Link to='/contactus'> ContactUs </Link> </li>
            </ul>

            <div className={styles.headerImg}>
                <img src={shoppingCart} className={styles.shoppingCartImg} alt='Shopping Cart' />
                <span className={styles.productQauntity}> {state.itemsCounter} </span>
                <img src={userProfile} className={styles.userProfileImg} alt='User Profile' />
            </div>
        </div>
    );
}

export default Header;