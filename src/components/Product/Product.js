import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
const Product = ({handleAddToCart,product}) => {
    // const{handleAddToCart,product}=props;
    const {name,img,seller,price,ratings}=product
    // console.log(props)
    return (
        <div className='product'>
            {/* <h2>Name :{name}</h2> */}
            <img src={img} alt="" srcset="" />
            <div className="product-info">
                <p className='product-name'>{name}</p>
                <p>Price : {price}$</p>
                <p><small>Manufacturer : {seller}</small></p>
                <p><small>Ratings : {ratings} ⭐</small></p>
            </div>
            <button onClick={()=>handleAddToCart(product)} className='btn-cart'>
                <p className='btn-text'>Add to Cart </p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                
            </button>

        </div>
    );
};

export default Product;