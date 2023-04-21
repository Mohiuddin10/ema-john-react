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
    

// for event handeler of clicl add to cart 
const handleAddToCart = (product) => {
    console.log(product);
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
            </div>
            
        </div>
    );
};

export default Shop;