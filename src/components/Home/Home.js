import React from 'react';
import "./Home.css";
import CardContainer from "../CardContainer/CardContainer";




function Home() {

    // const [ brands, setBrands ] = useState([]);
    // const [ loading, setLoading ] = useState(true);
    // const [ errorMessage, setErrorMessage ] = useState(null);
  
    // useEffect(() => {
    //   fetch(BrandURL + S)
    //   .then(response => response.json())
    //   console.log(response.json)
    //   .then(jsonResponse => {
    //     setBrands(jsonResponse.Search);
    //     setLoading(false);
    //   });
  
    // }, []);



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
