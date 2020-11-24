import React from 'react';
import { useStateValue } from '../StateProvider/StateProvider';
import "./Checkout.css";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";

function Checkout() {

    const [{ cart }] = useStateValue();

    return (
        <div className="checkout">
            <img
                className="checkout__img"
                src="https://i.imgur.com/TX4NN2r.jpg"
                alt="banner"
            />
            {cart?.length === 0 ? (
                <div>
                    <h2>Your Shopping Cart is empty</h2>
                    <p>Go back and put something in your cart!</p>
                </div>
            ) : (
                <div className="checkout__title">
                    <h2>Your Shopping Cart</h2>

                    {cart.map(item => (
                        <CheckoutProduct 
                        id={item.id}
                        price={item.price}
                        image={item.image}
                        title={item.title}
                        key={item.title}
                        />
                    ))}
                </div>
            )}
            
        </div>
    )
}

export default Checkout
