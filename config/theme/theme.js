import { createMuiTheme } from '@material-ui/core/styles';
import { cyan, red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      light: cyan[400],
      main: cyan[700],
      dark: cyan[900],
      contrastText: '#FFF'
    },
    secondary: {
      light: red[400],
      main: red[600],
      dark: red[800],
      contrastText: '#FFF'
    }
  }
});

export default theme;
