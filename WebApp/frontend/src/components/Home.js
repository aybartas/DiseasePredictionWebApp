import React,{Component} from 'react'
import AdminHome from "./AdminHome";
import {BrowserRouter as Router,Switch,Route,Link,Redirect} from "react-router-dom";
import FeatureInputForm from "./FeatureInputForm";

export default class Home extends Component{

    constructor(props) {
        super(props);
    }
    render() {
        return <Router>

            <Switch>
                <Route exact path='/'> <p>THIS İS HOMEPAGE</p> </Route>
                <Route path='/adminHome' component={AdminHome}/>
                <Route path='/prediction' component={FeatureInputForm}/>
            </Switch>
        </Router>
    }
}

