import React from 'react';
import './Product.css'

const Product = (props) => {
    const {name,price,seller,img,ratings}=props.product;
    const product = props.product;
    return (
       <div className='product-container'>
           <div>
               <img src={img} alt="" />
           </div>
           <div className='product-details'>
           <p>{name}</p>
            <p>Price :${price}</p>
            <p><small>Manufaturing : {seller}</small></p>
            <p><small>Rating : {ratings} star</small></p>
           </div>
            <button onClick={() => props.addToCart(product)}>Add to Cart</button>
        </div>
    );
};

export default Product;