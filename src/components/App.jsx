import React, { Component } from 'react'
import hashHistory from '../history'
import urls from '../constants/urls'
import { Router, Route, Switch } from 'react-router-dom'

import { MuiThemeProvider } from '@material-ui/core/styles'
import theme from './../styles/theme'

import Index from './index'
import LivePreviews from './livePreviews'
import Portfolio from './portfolio'


class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Router history={hashHistory}>
          <Switch>
            <Route exact path={urls.index} component={Index} />
            <Route exact path={urls.livePreviews} component={LivePreviews} />
            <Route exact path={urls.portfolio} component={Portfolio} />
          </Switch>
        </Router>
      </MuiThemeProvider>
    )
  }
}

export default App
