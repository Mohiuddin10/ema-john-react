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

    // order cart code 
    const [cart, setCart] = useState([]);
    

// for event handeler of clicl add to cart 
const handleAddToCart = (product) => {
    console.log(product);
    const newCart = [...cart, product ];
    setCart(newCart);
}

    return (
        <div className='shop'>
            <div className="product-container">
                

                {
                    products.map(product => <Product key={product.id} product={product} handleAddToCart={handleAddToCart} /> )
                }

            </div>


            <div className="cart-container">
                <h2>Order Summery</h2>
                <p>Order: {cart.length}</p>
            </div>
            
        </div>
    );
};

export default Shop;