import Header from './Header';
import { MuiThemeProvider, Grid } from '@material-ui/core';
import theme from '../../config/theme/theme';

const Layout = props => (
  <MuiThemeProvider theme={theme}>
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Header />
      </Grid>
      <Grid item xs={12}>
        {/* navigation des pages */}
        {props.children}
      </Grid>
    </Grid>
  </MuiThemeProvider>
);

export default Layout;
