import { Fragment, useState } from 'react';
import axios from 'axios';
import { Paper, Typography, Button, TextField } from '@material-ui/core';
import * as mutation from '../../../../../../graphql/fileAttachment/mutation';
import { useMutation } from 'react-apollo-hooks';
import config from '../../../../../../config/config';
import * as query from '../../../../../../graphql/fileAttachment/query';

const FileAttachmentAdd = props => {
  const [name, setName] = useState('');
  const [urlFile, setUrlFile] = useState();
  const { changeActiveTabs, employe } = props;

  const addFileAttachment = useMutation(mutation.ADD_FILE_ATTACHMENT);

  const uploadFichierAttache = () => {
    console.log('Inside upload fichier attaché');
    console.log(urlFile);

    const data = new FormData();
    data.append('urlFile', urlFile);

    //------- use axio
    axios.post(config.uploadAttachmentUri, data, {}).then(res => {
      console.log(res.statusText);
      //--------- use graphql endpoint
      addFileAttachment({
        update: (cache, mutationResult) => {
          const { allFileAttachments } = cache.readQuery({
            query: query.GET_ALL_FILE_ATTACHMENT,
            variables: {
              idEmploye: employe.id
            }
          });
          cache.writeQuery({
            query: query.GET_ALL_FILE_ATTACHMENT,
            variables: {
              idEmploye: employe.id
            },
            data: {
              allFileAttachments: allFileAttachments.concat([
                mutationResult.data.addFileAttachment
              ])
            }
          });
        },
        variables: {
          idEmploye: employe.id,
          name: name,
          urlFile: urlFile.name
        }
      });
    });
  };

  //---------- call on submit form
  const handleSubmit = () => {
    uploadFichierAttache();
    changeActiveTabs(0);
  };

  return (
    <Fragment>
      <Paper className='papers'>
        <Typography variant='h6' color='primary' align='center' component='h2'>
          Ajouter un fichier
        </Typography>
        <form onSubmit={() => handleSubmit()}>
          <div className='margin'>
            <input
              type='file'
              onChange={e => setUrlFile(e.target.files[0])}
              required
            />
          </div>
          <div className='margin'>
            <TextField
              label='Name'
              placeholder='Name'
              fullWidth
              required
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </div>
          <div className='margin'>
            <Button type='submit' variant='contained' color='primary'>
              Valider
            </Button>
          </div>
        </form>
      </Paper>
    </Fragment>
  );
};
export default FileAttachmentAdd;
