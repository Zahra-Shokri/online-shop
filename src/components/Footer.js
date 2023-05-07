import React from 'react';

// 1-2 Use Portal
import ReactDOM from 'react-dom';

const Footer = () => {
    const containerStyle = {color: '#4d4d4d', fontSize: '15px', padding: '10px 0', textAlign: 'center', backgroundColor: 'rgb(190, 190, 190)'}
    
    // 2-2 Use Portal
    return ReactDOM.createPortal(
        <div style={containerStyle}>
            <p>&copy; All Right Reserved 2023</p>
        </div>,
        document.getElementById('child-root')
    );
}

export default Footer;