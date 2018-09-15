import React, { Component } from 'react'
import hashHistory from '../history'
import { Router, Route, Switch } from 'react-router-dom'

import { MuiThemeProvider } from '@material-ui/core/styles'
import theme from './../styles/theme'

import Index from './pages/Index.jsx'


class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Router history={hashHistory}>
          <Switch>
            <Route exact path="/" component={Index} />
            <Route exact path="/s" component={() => <div>monika lal</div>} />
          </Switch>
        </Router>
      </MuiThemeProvider>
    )
  }
}

export default App
