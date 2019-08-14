import { CssBaseline, MuiThemeProvider } from '@material-ui/core'
import { StylesProvider } from '@material-ui/styles'
import React from 'react'
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
					<>
						<Header />
						<Main />
						<Footer />
					</>
				</Router>
			</MuiThemeProvider>
		</ThemeProvider>
	</StylesProvider>
)

export default App
