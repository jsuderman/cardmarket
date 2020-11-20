import React from 'react';
import "./Home.css";
import Sneaker from "../Sneaker/Sneaker.js";

function Home() {

    // const [sneaker, setSneaker] = useState("");

    // const getSneaker = () => {
    //     Axios.get("https://api.thesneakerdatabase.com/v1/sneakers?limit=10")
    //     .then((response) => {
    //         console.log(response.data.results);
            

    //         const sneakers = response.data.results.map(shoe => {

    //             const newObj = {
    //                 brand: shoe.brand,
    //                 color: shoe.colorway,
    //                 shoe: shoe.title,
    //                 price: shoe.retailPrice,
    //                 pic: shoe.media.imageUrl,
    //                 id: shoe.id
    //             }
    //             return newObj
                
    //         })
    //         setSneaker(sneakers);
    //     })
        
    // }



    return (
        <div className="home">
            <img 
                className="home__image"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-YvqpPDUXrzCt3A4B88dHjGBD7brH2iwuLA&usqp=CAU"
                alt="sneakerStore"
            />
            <Sneaker />
        </div>
    )
}

export default Home
