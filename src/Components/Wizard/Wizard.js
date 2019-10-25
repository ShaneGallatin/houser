import React from "react";
import {Link} from "react-router-dom";
import store, { UPDATE_NAME, UPDATE_ADDRESS, UPDATE_CITY, UPDATE_HOMESTATE, UPDATE_ZIPCODE } from "../../store";

class Wizard extends React.Component{
    constructor(){
        super();
        this.state = {
            name: "",
            address: "",
            city: "",
            homeState: "",
            zipcode: ""
        }
    }
        
    handleNameChange = e => {
        this.setState({name: e.target.value})
    }

    handleAddressChange = e => {
        this.setState({address: e.target.value})
    }

    handleCityChange = e => {
        this.setState({city: e.target.value})
    }

    handleHomeStateChange = e => {
        this.setState({state: e.target.value})
    }

    handleZipcodeChange = e => {
        this.setState({zipcode: e.target.value})
    }

    saveChanges(){
        store.dispatch({
            type: UPDATE_NAME,
            payload: this.state.name
        });
        store.dispatch({
            type: UPDATE_ADDRESS,
            payload: this.state.address
        });
        store.dispatch({
            type: UPDATE_CITY,
            payload: this.state.city
        });
        store.dispatch({
            type: UPDATE_HOMESTATE,
            payload: this.state.homeState
        });
        store.dispatch({
            type: UPDATE_ZIPCODE,
            payload: this.state.zipcode
        });
   
    }

    render(){
        return(
            <div>
                <h1>Wizard component</h1>
                <button><Link to="/">Cancel</Link></button>
                <p>Name</p>
                <input onChange={this.handleNameChange}></input>
                <p>Address</p>
                <input onChange={this.handleAddressChange}></input>
                <p>City</p>
                <input onChange={this.handleCityChange}></input>
                <p>State</p>
                <input onChange={this.handleHomeStateChange}></input>
                <p>Zipcode</p>
                <input onChange={this.handleZipcodeChange}></input>
                <button onClick={() => this.saveChanges()}>Add Property</button>
                
            </div>
        )
    }
} 

export default Wizard