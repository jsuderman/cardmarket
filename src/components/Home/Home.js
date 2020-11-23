import React from 'react';
import "./Home.css";
import CardContainer from "../CardContainer/CardContainer";



function Home() {





    return (
        <div className="home">
            <img
                className="home__image"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-YvqpPDUXrzCt3A4B88dHjGBD7brH2iwuLA&usqp=CAU"
                alt="sneakerStore"
            />
            

                <div>
                    <CardContainer />
                </div>
            


        </div>
    )
}

export default Home
