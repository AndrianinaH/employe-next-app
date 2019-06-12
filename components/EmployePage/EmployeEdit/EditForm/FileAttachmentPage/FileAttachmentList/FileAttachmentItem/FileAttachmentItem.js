import { Fragment } from 'react';
import { TableRow, TableCell, Button } from '@material-ui/core';
import { useMutation } from 'react-apollo-hooks';
import * as mutation from '../../../../../../../graphql/fileAttachment/mutation';
import * as query from '../../../../../../../graphql/fileAttachment/query';
import config from '../../../../../../../config/config';

const FileAttachmentItem = props => {
  const { fileAttachment } = props;

  const deleteFileAttachment = useMutation(mutation.DELETE_FILE_ATTACHMENT);
  const removeFileAttachment = id => {
    deleteFileAttachment({
      update: (cache, mutationResult) => {
        const { allFileAttachments } = cache.readQuery({
          query: query.GET_ALL_FILE_ATTACHMENT,
          variables: {
            idEmploye: fileAttachment.idEmploye
          }
        });
        cache.writeQuery({
          query: query.GET_ALL_FILE_ATTACHMENT,
          variables: {
            idEmploye: fileAttachment.idEmploye
          },
          data: {
            allFileAttachments: allFileAttachments.filter(i => i.id !== id)
          }
        });
      },
      variables: {
        id: id
      }
    });
  };

  return (
    <Fragment>
      <TableRow key={fileAttachment.id}>
        <TableCell>{fileAttachment.name}</TableCell>
        <TableCell>
          <a
            href={`${config.downloadAttachmentUri}?filename=${
              fileAttachment.urlFile
            }`}
          >
            {fileAttachment.urlFile}
          </a>
        </TableCell>
        <TableCell>
          <Button
            aria-label='Delete'
            variant='contained'
            color='secondary'
            onClick={() => removeFileAttachment(fileAttachment.id)}
          >
            Supprimer
          </Button>
        </TableCell>
      </TableRow>
    </Fragment>
  );
};

export default FileAttachmentItem;
