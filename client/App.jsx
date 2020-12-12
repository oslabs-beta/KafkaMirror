import React, { Component } from "react";
import { Switch, BrowserRouter as Router, Route, NavLink} from 'react-router-dom';
// import { Redirect, NavLink } from 'react-router-dom';
import DashBoard from './components/pages/Dashboard.jsx'
console.log(Switch)
console.log(Route)
console.log(NavLink)

export default class App extends Component{
  constructor(props, context){
    super(props, context);
    this.state={
    }
  }
  componentDidMount(){
  }
  render(){
    return(
      <div>
        <h2>react is rendering inside #root div</h2>
        <Router>
          <NavLink to='/dashboard'>DashBoard</NavLink> 
        <Switch>
          <Route path='/dashboard'>
            <DashBoard/>
          </Route>
        </Switch>
        </Router>
      </div>
    )
  }
}