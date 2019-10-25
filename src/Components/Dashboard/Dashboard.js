import React from "react";
import House from "../House/House";
import {Link} from "react-router-dom"
import store from "../../store"

class Dashboard extends React.Component{
    constructor(){
        super();
        const reduxState = store.getState()
        this.state = {
            houses: reduxState.houses
        }
    }

    render(){
        return(
            <div>
                <h1>Dashboard component</h1>
                <button><Link to ="/wizard">Add New Property</Link></button>
                <House/>
            </div>
        )
    }
}

export default Dashboard