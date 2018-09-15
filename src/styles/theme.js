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
    fontFamily: 'Roboto Mono'
  }
})

export default theme
