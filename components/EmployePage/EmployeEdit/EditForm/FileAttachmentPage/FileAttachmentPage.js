import { Fragment, useState } from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';
import FileAttachmentList from './FileAttachmentList/FileAttachmentList';
import FileAttachmentAdd from './FileAttachmentAdd/FileAttachmentAdd';

const FileAttachmentPage = props => {
  const [active, setActive] = useState(0);

  const changeActiveTabs = newActive => {
    setActive(newActive);
  };

  return (
    <Fragment>
      <Grid item xs={2} />
      <Grid item xs={8}>
        <Paper className='papers'>
          <Typography
            variant='h6'
            color='primary'
            align='center'
            component='h2'
          >
            <a onClick={() => changeActiveTabs(0)}>
              Liste des fichier attachés
            </a>
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={2} />
      <Grid item xs={2} />
      <Grid item xs={8}>
        {active === 0 && (
          <FileAttachmentList changeActiveTabs={changeActiveTabs} {...props} />
        )}
        {active === 1 && (
          <FileAttachmentAdd changeActiveTabs={changeActiveTabs} {...props} />
        )}
      </Grid>
      <Grid item xs={2} />
    </Fragment>
  );
};
export default FileAttachmentPage;
