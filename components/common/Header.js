import Head from 'next/head';
import { AppBar, Toolbar, Typography, withStyles } from '@material-ui/core';

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

const Header = props => {
  const { classes } = props;
  return (
    <div>
      <Head>
        <title>Employe App</title>
        <link href='/static/css/style.css' rel='stylesheet' />
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css?family=Roboto:300,400,500'
        />
      </Head>
      <AppBar position='sticky' color='primary'>
        <Toolbar>
          <Typography
            align='center'
            variant='h6'
            color='inherit'
            className={classes.grow}
          >
            Employe App
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withStyles(styles)(Header);
