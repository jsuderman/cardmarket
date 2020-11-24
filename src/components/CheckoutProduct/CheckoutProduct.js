import React from 'react';
import "./CheckoutProduct.css";


function CheckoutProduct({id,image,title, price}) {
    return (
        <div className="checkoutProduct">
            <img classname="checkout__img" src={image} alt="" />
            
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>

                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <button>Remove From Cart</button>
            </div>
            
        </div>
    )
}

export default CheckoutProduct
