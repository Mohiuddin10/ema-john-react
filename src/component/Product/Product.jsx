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
                <p>Manufacturer: {seller}</p>
                <p>Rating: {ratings} stars</p>
                <button>Add to cart</button>
            </div>
        </div>
    );
};

export default Product;