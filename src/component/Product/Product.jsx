import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
    const {handleAddToCart, product} = props;
    const {name, category, img, price, ratings, ratingsCount, seller, shipping, stock} = product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
                <p className='productName'>{name}</p>
                <small><span className='price'>Price:</span> ${price}</small>
                <p className='seller'><small>Manufacturer: {seller}</small></p>
                <p className='rating'>Rating: {ratings} stars</p>
            </div>
                <button className="add-cart" onClick={() => props.handleAddToCart(product)}>
                <p>Add to cart</p>
                <FontAwesomeIcon icon={faShoppingCart} />
                </button>
        </div>
    );
};

export default Product;