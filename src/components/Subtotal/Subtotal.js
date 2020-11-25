import React from 'react';
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../StateProvider/StateProvider";
import { getCartTotal } from '../Reducer/reducer';
import StripeCheckout from "react-stripe-checkout";

function Subtotal() {
    const [ { cart } , dispatch ] = useStateValue();

    const makePayment = (token) => {
        const body = {
            token,
            cart 
        }
        const headers = {
            "Content-Type": "application/json"
        }

        return fetch(`http://localhost:8282/payment`, {
            method: "POST",
            headers,
            body: JSON.stringify(body)
        }).then(response => {
            console.log("RESPONSE", response)
            const { status } = response;
            console.log("STATUS", status);
        })
        .catch(error => console.log(error))

    }

    return (
        <div className="subtotal">
            
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                Subtotal ({cart.length} items): <strong>{value}</strong>
                        </p>
                    </>
                )}

            decimalScale={2}
            value={getCartTotal(cart)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
            
            />
            <StripeCheckout 
            stripeKey="pk_test_51HrHIXLrQoe7hPNzrBA4WWeAPh0okF6ror7LKQi6WT9qNhNszkCudL86kRCUVFLhOfzMI52EpDj2fSEoRA7R1LS100628CLJ1P"
            token={makePayment}
            amount={getCartTotal(cart) * 100}
            name="Your Cart"
            >
                <button>PAY HERE</button>
            </StripeCheckout>
        </div>
    )
}

export default Subtotal
