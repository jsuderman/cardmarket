import React, { Component } from 'react';
import Navigation from "../components/Navbar/Navigation";
import API from "../Util/api";
import Cards from "../components/Card/Card"


export default class Landing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: "",
            loading: true,

        };
    }
    componentDidMount() {
        const url = API 
    }
    render() {
        return (
            <div>
                <Navigation />
                <Cards />
                <h1></h1>
            </div>
        )
    }
}
