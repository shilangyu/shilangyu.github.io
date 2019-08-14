import { CssBaseline, MuiThemeProvider } from '@material-ui/core'
import { StylesProvider } from '@material-ui/styles'
import React from 'react'
import { HashRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'
import theme from './styles/theme'

const App: React.FC = () => (
	<StylesProvider injectFirst>
		<ThemeProvider theme={theme}>
			<MuiThemeProvider theme={theme}>
				<CssBaseline />
				<HashRouter>
					<>
						<Header />
						<Main />
						<Footer />
					</>
				</HashRouter>
			</MuiThemeProvider>
		</ThemeProvider>
	</StylesProvider>
)

export default App
