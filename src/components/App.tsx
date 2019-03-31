import React, { Component, Fragment } from 'react'
import { Router } from 'react-router-dom'

import { CssBaseline, MuiThemeProvider } from '@material-ui/core'

import Header from './Header'
import Footer from './Footer'
import Main from './Main'

import hashHistory from '../history'
import theme from '../styles/theme'

class App extends Component {
	render() {
		return (
			<MuiThemeProvider theme={theme}>
				<CssBaseline />
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
