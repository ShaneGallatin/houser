import React from "react";
import {Switch, Route} from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";
import Wizard from "./Components/Wizard/Wizard";
import House from "./Components/House/House";

export default (
    <Switch>
        <Route component={House} path="/house/:houseId"/>
        <Route component={Wizard} path="/wizard"/>
        <Route component={Dashboard} path="/"/>
        <Route render= {() => <h2>404 not found</h2>} />
    </Switch>
)