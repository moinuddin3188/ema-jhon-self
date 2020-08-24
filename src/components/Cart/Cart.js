import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart
    const totalPrice = cart.reduce((total, product) => total + product.price, 0);
    const resetNumber = number => number.toFixed(2);
    let shipping = 0;
    if (totalPrice > 100) {
        shipping = 0;
    }
    else if (totalPrice > 50) {
        shipping = 12.74;
    }
    else if (totalPrice > 0) {
        shipping = 17.48;
    }
    const tex = totalPrice / 15;
    const grandTotal = totalPrice + shipping + tex;
    return (
        <div className='cart'>
            <h3>Order Summary</h3>
            <p>Items Ordered: {cart.length} </p>
            <table>
                <tr>
                    <td>Items:</td>
                    <td>${resetNumber(totalPrice)} </td>
                </tr>
                <tr>
                    <td>Shipping:</td>
                    <td>${resetNumber(shipping)}</td>
                </tr>
                <tr>
                    <td>Tex:</td>
                    <td>${resetNumber(tex)}</td>
                </tr>
                <tr>
                    <td><h4>Total Order</h4></td>
                    <td><h4>${resetNumber(grandTotal)}</h4></td>
                </tr>
            </table>
        </div>
    );
};

export default Cart;