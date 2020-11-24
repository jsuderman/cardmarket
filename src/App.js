import React, { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./components/FontawesomeIcons/index"

import Navigation from "./components/Navbar/Navigation";
import Home from "./components/Home/Home";
import Checkout from "./components/Checkout/Checkout";
import Login from "./components/Login/Login";
import { auth } from "./components/Firebase/firebase";
import { useStateValue } from "./components/StateProvider/StateProvider";


// import Landing from "./pages/Landing";


function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {

        dispatch({
          type: "SET_USER",
          user: authUser,
        });

      } else {

        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });

    return () => {
      unsubscribe();
    };

  }, []); 

  console.log("user is >>>>>>", user);
    

  return (
    <Router>
      <div className="app">
        <Switch>

          <Route path="/checkout">
            <Navigation />
            <Checkout />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/">
            <Navigation />
            <Home />
          </Route>

        </Switch>
    </div>
    </Router>
    
    
  );
}

export default App;
