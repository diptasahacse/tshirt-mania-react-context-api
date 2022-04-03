import React from 'react';

const Cart = ({cart,removeFromCart}) => {

    return (
        <div>
            <h4>Cart Summery</h4>
            <div>
                {
                    cart.map((item,index) => <p key={index}>{item.name} <button onClick={()=>removeFromCart(item)}>X</button></p> )
                }
            </div>
        </div>
    );
};

export default Cart;