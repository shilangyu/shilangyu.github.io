import { createMuiTheme } from '@material-ui/core'

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
		},
		background: {
			paper: '#fff',
			default: '#80deea'
		}
	},
	typography: {
		fontFamily: 'Roboto Mono',
		fontWeightRegular: 300
	}
})

export default theme
