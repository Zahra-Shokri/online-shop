import React from 'react';
import styles from '../styles/Banner.module.css';
import bannerIMG from '../images/Banner.jpg';

const Banner = () => {
    return(
        <div className={styles.container}>
            <img src={bannerIMG} alt='Full Screen Pic' />

            <div className={styles.textContainer}>
                <h1><span>Lovely</span> Stories...</h1>
                <p>
                    We Make All The Best Things Together...
                </p>
            </div>
        </div>
    );
}

export default Banner;