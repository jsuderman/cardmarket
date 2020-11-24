import React from 'react';
import "./CheckoutProduct.css";
import { useStateValue } from "../StateProvider/StateProvider";

function CheckoutProduct({ id,image,title, price }) {
    const [ { cart } , dispatch] = useStateValue();

    console.log(id,image,title, price);

    const removeFromCart = () => {

        dispatch({
            type: "REMOVE_FROM_CART",
            id: id,
        });
    }

    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__img" src={image} alt="" />
            
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>

                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <button onClick={removeFromCart}>Remove From Cart</button>
            </div>
            
        </div>
    )
}

export default CheckoutProduct
