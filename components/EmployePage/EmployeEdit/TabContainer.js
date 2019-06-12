import { Fragment, useState } from 'react';
import { Grid, Tabs, Tab, AppBar } from '@material-ui/core';
import EditForm from './EditForm/EditForm';
import FileAttachmentPage from './EditForm/FileAttachmentPage/FileAttachmentPage';

const TabContainer = props => {
  const [active, setActive] = useState(0);

  const changeTabs = (event, newActive) => {
    setActive(newActive);
  };
  return (
    <Fragment>
      <Grid container spacing={3}>
        <Grid item xs={2} />
        <Grid item xs={8}>
          <AppBar position='static' color='default'>
            <Tabs
              textColor='primary'
              indicatorColor='primary'
              variant='fullWidth'
              centered={true}
              value={active}
              onChange={(event, newActive) => changeTabs(event, newActive)}
            >
              <Tab label='Principal Information' />
              <Tab label='Files Attachments' />
            </Tabs>
          </AppBar>
        </Grid>
        <Grid item xs={2} />
        {active === 0 && <EditForm {...props} />}
        {active === 1 && <FileAttachmentPage {...props} />}
      </Grid>
    </Fragment>
  );
};
export default TabContainer;
