import {createStore} from "redux";

const initialState = {
    name: "",
    address: "",
    city: "",
    homeState: "",
    zipcode: "",
    houses: []
};

export const UPDATE_NAME = "UPDATE_NAME";
export const UPDATE_ADDRESS = "UPDATE_ADDRESS";
export const UPDATE_CITY = "UPDATE_CITY";
export const UPDATE_HOMESTATE = "UPDATE HOMESTATE";
export const UPDATE_ZIPCODE = "UPDATE_ZIPCODE";
export const ADD_HOUSE = "ADD_HOUSE";

function reducer(state = initialState, action){
    const{type, payload} = action;
    switch(type){
        case UPDATE_NAME:
            return {...state, name: payload};
        case UPDATE_ADDRESS:
            return {...state, address: payload};
        case UPDATE_CITY:
            return {...state, city: payload};
        case UPDATE_HOMESTATE: 
            return {...state, homeState: payload};
        case UPDATE_ZIPCODE:
            return {...state, zipcode: payload};
        case ADD_HOUSE:
            const {
                name, 
                address,
                city,
                homeState,
                zipcode
            } = state;
            const house = {
                name,
                address,
                city,
                homeState,
                zipcode
            }
            const newHouses = [...state.houses, house]
            return {...state, houses: newHouses}
        default:
            return state;
            
        
    }
}


export default createStore(reducer);