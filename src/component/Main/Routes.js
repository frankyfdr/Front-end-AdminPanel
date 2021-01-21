import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Orders from "../Orders/index.js"
import Products from "../Products/index.js"
import Customer from "../Customer/index.js"
import Dashboard from "../Dashboard/index.js"

const Routes = (props) => (
    
    <Switch>
        <Route path="/orders" component={Orders} />  
        <Route path="/products" component={Products} />  
        <Route path="/Customers" component={Customer} />  
        <Route path="/Dashboard" component={Dashboard} />  
    </Switch>
);
export default Routes;