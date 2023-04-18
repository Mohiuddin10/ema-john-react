import React, { useEffect, useState } from 'react';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect( () => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => console.log(data))
    },[]);
    return (
        <div className='shop'>
            <div className="product-container">
                <h1>This is Product container</h1>

            </div>


            <div className="cart-container">
                <h2>Order Summery</h2>
            </div>
            
        </div>
    );
};

export default Shop;