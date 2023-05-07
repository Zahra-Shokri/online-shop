import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/Card.module.css';
import downIcn from '../images/icon/down.svg';
import upIcn from '../images/icon/up.svg';

class Card extends PureComponent {
    constructor() {
        super();
        this.state = {
            counter: 0
        }
    }

    // Decrease Count
    changeDownCount = () => {
        if(this.state.counter)
        this.setState((prevState) => ({ counter: prevState.counter - 1 }));
    }
    
    // Increase Count
    changeUpCount = () => {
        this.setState((prevState) => ({ counter: prevState.counter + 1 }));
    }

    render() {
        const {counter} = this.state;
        const {src, productName, price} = this.props;
        
        return(
            <div className={styles.container}>
                <img className={styles.cardImg} src={src} alt='Product' />
                <p className={styles.productName}> {productName} </p>
                <p className={styles.productPrice}>{price} {(counter) ? `* ${counter} = ${price*counter}` : ''}</p>

                {/* Decrease & Increase Count */}
                <div className={styles.counterDiv}>
                    <img src={downIcn} className={(!counter) ? styles.deactivDownIcn : ''} onClick={this.changeDownCount} alt='Down Icon' />
                    <span>{counter}</span>
                    <img src={upIcn} alt='Up Icon' onClick={this.changeUpCount} />
                </div>
            </div>
        );
    }
}

Card.propTypes = {
    productName: PropTypes.string,
    price: PropTypes.number
}

export default Card;