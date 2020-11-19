import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./components/FontawesomeIcons/index"

import Navigation from "./components/Navbar/Navigation";
import Home from "./components/Home/Home";

// import Landing from "./pages/Landing";


function App() {
  return (
    <Router>
      <div className="app">
        <Switch>

          <Route path="/checkout">
            <Navigation />
            <h1>checkout</h1>
          </Route>

          <Route path="/login">
            <h1>login</h1>
          </Route>

          <Route path="/">
            <Navigation />
            <Home />
            <h1>home page</h1>
          </Route>

        </Switch>
    </div>
    </Router>
    
    
  );
}

export default App;
