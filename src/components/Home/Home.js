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
                src="https://images.unsplash.com/photo-1579298245158-33e8f568f7d3?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8bmlrZXxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=800&q=60"
                alt="sneakerStore"
            />
            

                <div>
                    <CardContainer />
                </div>
            


        </div>
    )
}

export default Home
