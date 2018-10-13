import React, { Component, Fragment } from 'react'
import hashHistory from '../history'
import { Router } from 'react-router-dom'

import { MuiThemeProvider } from '@material-ui/core/styles'
import theme from './../styles/theme'

import Header from './Header'
import Footer from './Footer'
import Main from './Main'


class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Router history={hashHistory}>
          <Fragment>
            <Header />
            <Main />
            <Footer />
          </Fragment>
        </Router>
      </MuiThemeProvider>
    )
  }
}

export default App
