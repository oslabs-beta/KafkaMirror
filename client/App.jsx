import React, { Component } from 'react';
import {
  BrowserRouter as Router, Switch, Route, NavLink,
} from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
// import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Mirror from './pages/Mirror';
// import Logs from './pages/Logs';
// import Streams from './pages/Streams';
// import Team from './pages/Team';
import Settings from './pages/Settings';
import './App.scss';

export default class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <div className="appContainer">
        <Router>
          <Sidebar className="sidebar" />
          <div className="mainContainer">
            <Switch>
              {/* @description planned routes that the originals didn't get to, iterating developers enjoy */}
              {/* <Route exact path="/" component={Home} /> */}
              <Route exact path="/" component={Dashboard} />
              <Route path="/mirror" component={Mirror} />
              {/* <Route path="/logs" component={Logs} /> */}
              {/* <Route path="/streams" component={Streams} /> */}
              {/* <Route path="/team" component={Team} /> */}
              <Route path="/settings" component={Settings} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
