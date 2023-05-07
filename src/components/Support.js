import React, { Component } from 'react';
import styles from '../styles/Support.module.css';
import pic1 from '../images/supporter/Supporter1.png';
import pic2 from '../images/supporter/Supporter2.png';
import pic3 from '../images/supporter/Supporter3.png';

class Support extends Component {
    render() {
        return(
            <div className={styles.container}>
                <p>Who Support us?</p>
                
                <div className={styles.imgContent}>
                    <img src={pic1} alt='Supporter1' />
                    <img src={pic2} alt='Supporter2' />
                    <img src={pic3} alt='Supporter3' />
                </div>
            </div>
        );
    }
}

export default Support;