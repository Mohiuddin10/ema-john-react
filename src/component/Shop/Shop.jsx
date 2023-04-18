import React, { useEffect, useState } from 'react';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect( () => {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[]);
    console.log(products);
    return (
        <div className='shop'>
            <div className="product-container">
                <h1>This is Product container</h1>
                <h2>Products: {products.length}</h2>

            </div>


            <div className="cart-container">
                <h2>Order Summery</h2>
            </div>
            
        </div>
    );
};

export default Shop;