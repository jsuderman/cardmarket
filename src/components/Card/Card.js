import React from 'react';
import { Card } from "react-bootstrap";
import Sneakers from '../Sneaker/Sneaker';


const Cards = (props) => {

    
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.sneaker.media.imageUrl} />
                <Card.Body>
                    <Card.Title>
                        {props.sneaker.title}
                        
                    </Card.Title>
                    <Card.Text>
                        <p>Price:{props.sneaker.retailPrice}</p>
                        {props.sneaker.releaseDate}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )

}

export default Cards; 
