import React,{Component} from 'react'
import AdminHome from "./AdminHome";
import AddFeature from "./AddFeature";
import {BrowserRouter as Router,Switch,Route,Link,Redirect} from "react-router-dom";
import Prediction from "./Prediction";

export default class Home extends Component{

    constructor(props) {
        super(props);
    }
    render() {
        return <Router>
            <Switch>
                <Route exact path='/'> <p>THIS İS HOMEPAGE</p> </Route>
                <Route path='/addFeature' component={AddFeature}/>
                <Route path='/adminHome' component={AdminHome}/>
                <Route path='/prediction' component={Prediction}/>

            </Switch>

        </Router>
    }
}

