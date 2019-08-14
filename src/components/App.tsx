import { CssBaseline, MuiThemeProvider } from '@material-ui/core'
import { StylesProvider } from '@material-ui/styles'
import React, { Fragment } from 'react'
import { Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import hashHistory from '../history'
import theme from '../styles/theme'
import Footer from './Footer'
import Header from './Header'
import Main from './Main'

const App: React.FC = () => (
	<StylesProvider injectFirst>
		<ThemeProvider theme={theme}>
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
		</ThemeProvider>
	</StylesProvider>
)

export default App
