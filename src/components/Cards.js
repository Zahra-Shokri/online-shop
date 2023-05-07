import React, { Component } from 'react';
import Card from './Card';
import pic1 from '../images/products/MyUncleNapoleon.jpg';
import pic2 from '../images/products/SymphonyOfTheDead.jpg';
import pic3 from '../images/products/HerEyes.jpg';
import pic4 from '../images/products/Shohar-eAhooKhanoom.jpg';

class Cards extends Component {
    constructor() {
        super();

        // 1-2 Use List Rendering
        this.state = {
            productData: [
                {id: 1, src: pic1, productName: 'دایی جان ناپلئون', price: 120000},
                {id: 2, src: pic2, productName: 'سمفونی مردگان', price: 89000},
                {id: 3, src: pic3, productName: 'چشمهایش', price: 750000},
                {id: 4, src: pic4, productName: 'شوهر آهو حانم', price: 100000}
            ]
        }
    }

    render() {
        return(
            <div style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
                {/* <Card src={pic1} productName='دایی جان ناپلئون' price=1200000 />
                <Card src={pic2} productName='سمفونی مردگان' price=890000 />
                <Card src={pic3} productName='چشمهایش' price=2600000 />
                <Card src={pic4} productName='شوهر آهو خانم' price=1900000 /> */}

                {/* 2-2 Use List Rendering */}
                {this.state.productData.map(product => 
                    <Card key={product.id} id={product.id} src={product.src} productName={product.productName} price={product.price} />
                )}
            </div>
        );
    }
}

export default Cards;