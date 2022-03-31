import React from 'react';

const Cart = (props) => {
    const {cart}=props;
   
    let total = 0;
    let Shipping = 0;
    for(const product of cart){
        total = total + product.price;
        Shipping = Shipping + product.shipping;
    }
    const tax = (total * 0.1).toFixed(2)
    const grandTotal = total + Shipping + parseFloat(tax);
    return (
        <div>
            <h3>Order Summary</h3>
            <p>Selected Item : {props.cart.length}</p>
            <p>Total Price : {total}</p>
            <p>Shipping : {Shipping}</p>
            <p>Tax : {tax}</p>
            <h4>Grand Total : {grandTotal}</h4>
            
        </div>
    );
};

export default Cart;