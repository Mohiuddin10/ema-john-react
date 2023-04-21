import React from 'react';
import './Product.css';

const Product = (props) => {
    const {name, category, img, price, ratings, ratingsCount, seller, shipping, stock} = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
                <p className='productName'>{name}</p>
                <small><span className='price'>Price:</span> ${price}</small>
                <p className='seller'><small>Manufacturer: {seller}</small></p>
                <p className='rating'>Rating: {ratings} stars</p>
            </div>
                <button className="add-cart">
                <p>Add to cart</p>
                </button>
        </div>
    );
};

export default Product;