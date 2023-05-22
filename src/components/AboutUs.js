import React from 'react';
import useTitle from '../hooks/useTitle.js';


const AboutUs = (props) => {
    useTitle('About Us Page');

    return (
        <div style={{minHeight: '100vh', padding: '15px'}}>
            <h1> AboutUs </h1>
            <h3 style={{marginTop: '20px'}}> This site is created by {props.firstName} {props.lastName} </h3>
        </div>
    );
}

export default AboutUs;