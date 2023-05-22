import React from 'react';
import useTitle from '../hooks/useTitle.js';


const ContactUs = () => {
    useTitle('Contact Us Page');

    return (
        <div style={{minHeight: '100vh', padding: '15px'}}>
            <h1> ContactUs </h1>
            <h3 style={{marginTop: '20px'}}> Mail: zvahedi5@gmail.com </h3>
        </div>
    );
}

export default ContactUs;