import React, { Component } from 'react';
import Card from './Card';
import axios from 'axios';
import styles from '../styles/Products.module.css';

class Products extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isError: false,
            productsData: [] 
        }
    }
    
    componentDidMount = () => {
        axios.get('http://fakestoreapi.com/products')
        .then(response => this.setState({
            productsData: response.data
        }))
    }

    componentDidCatch = () => {
        this.setState({
            isError: true,
        });
    } 
    
    render() {
        const {isError, productsData} = this.state;

        return (
            <div className={styles.container}>
                {
                    (productsData.length) ? 
                        productsData.map(product => <Card key={product.id} src={product.image} productName={product.title} price={product.price} />) :
                    <>
                        {
                            (isError) ? <h1> Please Referesh Page... </h1> : <h1> Please Wait... </h1>
                        }
                    </>
                }
            </div>
        );
    }
}

export default Products;