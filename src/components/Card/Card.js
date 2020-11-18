import React from 'react';
import { Card } from "react-bootstrap";

function Cards(props) {
    
        return (
            <div>
                <Card style={{ width: '18rem' }}>
                    <h1>{props.title}</h1>
                </Card>
            </div>
        )
    
}

export default Cards; 
