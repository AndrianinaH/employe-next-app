import {
  Table,
  TableRow,
  TableCell,
  Paper,
  Button,
  TableHead,
  TableBody,
  withStyles
} from '@material-ui/core';
import { useQuery } from 'react-apollo-hooks';
import * as query from '../../../../../../graphql/fileAttachment/query';
import FileAttachmentItem from './FileAttachmentItem/FileAttachmentItem';
import { Link } from '../../../../../../routes';

const styles = {
  table: {
    minWidth: 350
  }
};

const FileAttachmentList = props => {
  const { employe, classes, changeActiveTabs } = props;

  const { data, loading, error } = useQuery(query.GET_ALL_FILE_ATTACHMENT, {
    variables: {
      idEmploye: employe.id
    }
  });
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error</div>;
  }
  if (!data || !data.allFileAttachments) {
    return <div>Error</div>;
  }
  console.log(data);
  let allFileAttachments = data.allFileAttachments.map((el, index) => {
    return <FileAttachmentItem key={el.id} fileAttachment={el} {...props} />;
  });

  return (
    <Paper className='papers-table'>
      <Button
        variant='contained'
        color='primary'
        onClick={() => changeActiveTabs(1)}
      >
        <a>Ajouter un fichier</a>
      </Button>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>UrlFile</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{allFileAttachments}</TableBody>
      </Table>
    </Paper>
  );
};

export default withStyles(styles)(FileAttachmentList);
