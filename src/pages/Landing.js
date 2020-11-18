import React, { Component, useState, useEffect } from 'react';
import Navigation from "../components/Navbar/Navigation";
import Cards from "../components/Card/Card";
import Containers from "../components/Container/Container";


export default () => {
    
    const [shoes, setShoes] = useState();
    const [sneaker, setSneaker] = useState(null)

    useEffect(async () => {
        const response = await fetch("https://api.thesneakerdatabase.com/v1/sneakers?limit=10");
        const data = await response.json();
        const [item] = data.results;
        setSneaker(item)
    }, []);


    // async componentDidMount() {
    //     const url = "https://api.thesneakerdatabase.com/v1/sneakers?limit=10"
    //     const response = await fetch(url);
    //     const data = await response.json();
    //     console.log(data.results)

    //     const sneakers = data.results.map(shoe => {

    //         const newShoe = {
    //             brand: shoe.brand,
    //             color: shoe.colorway,
    //             gender: shoe.gender,
    //             picture: shoe.media.thumbUrl,
    //             shoe: shoe.shoe,
    //             title: shoe.title,
    //             year: shoe.year,
    //             price: shoe.retailPrice,
    //         }
    //         return newShoe;
    //     })

    //     this.setState({ sneaker: sneakers, loading: false, })
    // }
 
        return (
            <div>
                <Navigation />
                <Containers />
                <Cards />
            {sneaker && <div>{sneaker.title}</div>}
            
            
            </div>
        )
};

