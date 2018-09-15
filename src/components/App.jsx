import React, { Component } from 'react'
import hashHistory from '../history'
import { Router, Route, Switch } from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Switch>
          <Route exact path="/" component={() => <div>lul</div>} />
          <Route exact path="/s" component={() => <div>monika lal</div>} />
        </Switch>
      </Router>
    )
  }
}

export default App;
