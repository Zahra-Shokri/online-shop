import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import userProfile from '../images/icon/user.png';

const Div = styled.div`
    display: flex;
    padding: 10px;
    align-items: center;
    justify-content: space-between;
    background-color: rgb(190, 190, 190);

    img {
        width: 45px;
        margin: 0 20px;
        border-radius: 100%;
        background-color: rgb(214, 214, 214);
    }

    img:hover {
        cursor: pointer;
    }
`;

const Ul = styled.ul`
    display: flex;
    list-style: none;
    
    justify-content: space-around;

    a {
        margin: 0 30px;
        color: #4d4d4d;
        text-decoration: none;
    }
`;

const Header = () => {
    return(
        <Div>
            <Ul>
                <li> <Link to='/'> Home Page </Link> </li>
                <li> <Link to='/products'> Products </Link> </li>
                <li> <Link to='/aboutus'> About Us </Link> </li>
                <li> <Link to='/contactus'> ContactUs </Link> </li>
            </Ul>

            <img src={userProfile} alt='User Profile' />
        </Div>
    );
}

export default Header;