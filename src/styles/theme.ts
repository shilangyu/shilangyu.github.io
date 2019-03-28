import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#ff80ab'
		},
		secondary: {
			main: '#80deea'
		},
		text: {
			primary: '#000000',
			secondary: '#ffffff'
		}
	},
	typography: {
		fontFamily: 'Roboto Mono',
		fontWeightRegular: 300,
		useNextVariants: true
	}
})

export default theme
