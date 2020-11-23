import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Sneakers from '../Sneaker/Sneaker';
import "./CardContainer.css"

function CardContainer() {
    return (
        
        <div>
            <Container>
                <Row>
                    <Col >
                        <Sneakers />
                    </Col>
                </Row>
            </Container>

        </div>
    );
}



export default CardContainer

