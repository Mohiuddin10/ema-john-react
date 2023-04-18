import React from 'react';
import './Product.css';

const Product = (props) => {
    const {name, category, img, price, ratings, ratingsCount, seller, shipping, stock} = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <h6>{name}</h6>
            <small><span className='price'>Price:</span> ${price}</small>
            <p>Manufacturer: {seller}</p>
            <p>Rating: {ratings}</p>
            <button>Add to cart</button>
            
            
            
        </div>
    );
};

export default Product;