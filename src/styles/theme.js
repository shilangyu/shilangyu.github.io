import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ff80ab',
    },
    secondary: {
      main: '#80deea',
    },
  },
  typography: {
    fontFamily: 'Roboto Mono',
    fontWeightRegular: 300,
  }
})

export default theme
