import React from 'react';

const Cart = ({cart,removeFromCart}) => {
    

    // Conditional Rendering
    // Option 1 > Element Variable
    // let message;
    // if(cart.length === 0){
    //     message = <p>Please add at least one item</p>;

    // }
    // else if(cart.length === 1){
    //     message = <p>Please add more item</p>;

    // }
    // else{
    //     message = <p>Thanks for adding item</p>;

    // }
    

    return (
        <div>
            <h4>Cart Summery</h4>
            {/* {
                message
            } */}
            <div>
                {
                    cart.map((item,index) => <p key={index}>{item.name} <button onClick={()=>removeFromCart(item)}>X</button></p> )
                }
            </div>
            <div>
                {
                    cart.length !== 4 ? <p>Keep Adding</p> : <button>Remove All</button>
                }
            </div>
        </div>
    );
};

export default Cart;