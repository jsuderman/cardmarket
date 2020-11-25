import React, { useState, useEffect } from 'react';
import "./Sneaker.css";
import Cards from "../Card/Card";

function Sneakers(props) {

    const [sneakers, setSneakers] = useState([]);
    useEffect(() => {
        fetch("https://api.thesneakerdatabase.com/v1/sneakers?limit=20")
        .then(response => response.json())
        .then(data => setSneakers(data.results)); 
    }, []);

    
    return (
        <div>
            
            <div>
                {sneakers.map(sneaker => (
                    <Cards sneaker={sneaker} key={sneaker.id}/>
                ))}
            </div>

            
            
            
            
        </div>
    )
}

export default Sneakers
