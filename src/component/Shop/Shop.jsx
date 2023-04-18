import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect( () => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[]);
    console.log(products);
    return (
        <div className='shop'>
            <div className="product-container">
                <h2>Products: {products.length}</h2>

                {
                    products.map(product => <Product /> )
                }

            </div>


            <div className="cart-container">
                <h2>Order Summery</h2>
            </div>
            
        </div>
    );
};

export default Shop;