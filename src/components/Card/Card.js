import React from 'react';
import { Card, CardGroup } from "react-bootstrap";
import "./Card.css";
import { useStateValue } from "../StateProvider/StateProvider";



const Cards = (props) => {

    const [ {cart} ,dispatch ] = useStateValue();

    const addToCart = () => {
        dispatch({
            type: "ADD_TO_CART",
            item: {
                title: props.sneaker.title,
            },
        });
    };


    return (
        <div>
            <CardGroup>
                <Card style={{ width: "10rem" }} key={props.sneaker.id}>
                    <Card.Img variant="top" src={props.sneaker.media.thumbUrl} />
                    <Card.Body>
                        <Card.Title>
                            {props.sneaker.title}
                        </Card.Title>
                        <Card.Text>
                           Price:{props.sneaker.retailPrice}
                            Release Date:{props.sneaker.releaseDate}
                        </Card.Text>
                    </Card.Body>
                    <button onClick={addToCart}>Add to cart</button>
                </Card>
            </CardGroup>
        </div>
    )

}

export default Cards; 
