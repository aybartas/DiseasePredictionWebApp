import React,{Component} from 'react'
import AdminHome from "./AdminHome";
import AddFeature from "./AddFeature";
import {BrowserRouter as Router,Switch,Route,Link,Redirect} from "react-router-dom";

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
            </Switch>

        </Router>
    }
}

