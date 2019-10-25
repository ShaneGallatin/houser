import React from "react";

class House extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return(
            <div>
                <h1>House component</h1>
                {/* <p>This house's id is {this.props.match.params.houseId}</p> */}
            </div>
        )
    }
}

export default House