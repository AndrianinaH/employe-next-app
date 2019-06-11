import Layout from '../components/common/Layout';
import { Grid, Typography, Paper } from '@material-ui/core';
import EmployeList from '../components/EmployePage/EmployeList/EmployeList';

const EmployePage = props => {
  return (
    <Layout>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className='papers'>
            <Typography
              variant='h6'
              color='primary'
              align='center'
              component='h2'
            >
              Liste des employés
            </Typography>
          </Paper>
        </Grid>
      </Grid>
      <br />
      <Grid item xs={12}>
        <EmployeList {...props} />
      </Grid>
    </Layout>
  );
};

export default EmployePage;
