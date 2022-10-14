import React from 'react';
import './Cart.css'

const Cart = ({product,handleClick}) => {
    const {name,picture}=product
    return (
        <div>
            <div className="cart">
           
                <div className="cart-body">
                <img src={picture} alt="" />
                    <h1>Name:{name}</h1>
                    <button onClick={()=>handleClick(product)}>Order Now</button> 
                </div>
            </div>
        </div>
    );
};

export default Cart;