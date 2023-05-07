import React from 'react';

const ContactUs = (props) => {
    return (
        <div style={{minHeight: '100vh', padding: '15px'}}>
            <h1> ContactUs </h1>
            <h2 style={{marginBottom: '30px'}}> Hello {props.firstName} {props.lastName} </h2>
        </div>
    );
}

export default ContactUs;