import { CssBaseline, MuiThemeProvider } from '@material-ui/core'
import { StylesProvider } from '@material-ui/styles'
import React, { useEffect } from 'react'
import { HashRouter } from 'react-router-dom'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { setVisibleHeight } from 'visible-height-css'
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'
import theme from './styles/theme'

const GlobalStyle = createGlobalStyle`
	#root {
		min-height: calc(var(--vih) * 100);
		display: flex;
  	flex-direction: column;
	}

	body::-webkit-scrollbar-thumb {
		background-color: #c1c1c1;
	}

	body::-webkit-scrollbar {
		width: 10px;
		background-color: #f5f4f5;
	}
`

const App: React.FC = () => {
	useEffect(() => {
		setVisibleHeight('vih')
	}, [])

	return (
		<StylesProvider injectFirst>
			<ThemeProvider theme={theme}>
				<MuiThemeProvider theme={theme}>
					<CssBaseline />
					<HashRouter>
						<>
							<GlobalStyle />
							<Header />
							<Main />
							<Footer />
						</>
					</HashRouter>
				</MuiThemeProvider>
			</ThemeProvider>
		</StylesProvider>
	)
}

export default App
