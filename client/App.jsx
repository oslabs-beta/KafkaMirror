import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, NavLink} from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import IconSidebar from './components/Sidebar/IconSidebar';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Mirror from './pages/Mirror';
import Logs from './pages/Logs';
import Streams from './pages/Streams';
import Team from './pages/Team';
import Support from './pages/Support';
<<<<<<< HEAD
import './App.scss';
=======

>>>>>>> 67ae9dbd8893590ad4fa6dfdd977b4e6e5236439
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
      <div className="appContainer">
        <Router>
          <Sidebar className="sidebar" />
          {/* <IconSidebar /> */}
<<<<<<< HEAD
          {/* <Dashboard /> */}
          <div className="mainContainer">
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/dashboard' component={Dashboard} />
                <Route path='/mirror' component={Mirror} />
                <Route path='/logs' component={Logs} />
                <Route path='/streams' component={Streams} />
                <Route path='/team' component={Team} />
                <Route path='/support' component={Support} />
            </Switch>
          </div>
=======
        <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/dashboard' component={Dashboard} />
            <Route path='/mirror' component={Mirror} />
            <Route path='/logs' component={Logs} />
            <Route path='/streams' component={Streams} />
            <Route path='/team' component={Team} />
            <Route path='/support' component={Support} />
        </Switch>
>>>>>>> 67ae9dbd8893590ad4fa6dfdd977b4e6e5236439
        </Router>
      </div>
    )
  }
}