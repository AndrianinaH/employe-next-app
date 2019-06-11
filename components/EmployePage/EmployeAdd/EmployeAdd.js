import React, { Fragment, useState } from 'react';
import { Grid, Paper, TextField, Typography, Button } from '@material-ui/core';
import { useMutation } from 'react-apollo-hooks';
import * as mutation from '../../../graphql/employe/mutation';
import * as query from '../../../graphql/employe/query';
import axios from 'axios';
import config from '../../../config/config';
import { Router } from '../../../routes';

const EmployeAdd = props => {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [poste, setPoste] = useState('');
  const [sexe, setSexe] = useState('');
  const [dateNaisance, setDateNaisance] = useState('');
  const [urlPhoto, setUrlPhoto] = useState();

  const addEmploye = useMutation(mutation.ADD_EMPLOYE);

  const uploadImageProfil = () => {
    console.log('Inside upload image profil');
    console.log(urlPhoto);

    const data = new FormData();
    data.append('urlPhoto', urlPhoto);

    //------- use axio
    axios.post(config.uploadImageUri, data, {}).then(res => {
      console.log(res.statusText);
      //--------- use graphql endpoint
      addEmploye({
        update: (cache, mutationResult) => {
          const { allEmployes } = cache.readQuery({
            query: query.GET_ALL_EMPLOYE
          });
          cache.writeQuery({
            query: query.GET_ALL_EMPLOYE,
            data: {
              allEmployes: allEmployes.concat([mutationResult.data.addEmploye])
            }
          });
        },
        variables: {
          nom: nom,
          prenom: prenom,
          poste: poste,
          sexe: sexe,
          dateNaissance: dateNaisance,
          urlPhoto: urlPhoto.name
        }
      });
    });
  };

  //---------- call on submit form
  const handleSubmit = () => {
    uploadImageProfil();
    Router.pushRoute('/');
  };

  return (
    <Fragment>
      <Grid container spacing={3}>
        <Grid item xs={3} />
        <Grid item xs={6}>
          <Paper className='papers'>
            <Typography
              variant='h6'
              color='primary'
              align='center'
              component='h2'
            >
              Ajouter un Employé
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={3} />
        <Grid item xs={3} />
        <Grid item xs={6}>
          <Paper className='papers'>
            <form onSubmit={() => handleSubmit()}>
              <div className='margin'>
                <input
                  accept='image/*'
                  type='file'
                  onChange={e => setUrlPhoto(e.target.files[0])}
                  required
                />
              </div>
              <div className='margin'>
                <TextField
                  label='Nom'
                  placeholder='Nom'
                  fullWidth
                  required
                  value={nom}
                  onChange={e => setNom(e.target.value)}
                />
              </div>
              <div className='margin'>
                <TextField
                  label='Prenom'
                  placeholder='Prenom'
                  fullWidth
                  required
                  value={prenom}
                  onChange={e => setPrenom(e.target.value)}
                />
              </div>
              <div className='margin'>
                <TextField
                  label='Poste'
                  placeholder='Poste'
                  fullWidth
                  required
                  value={poste}
                  onChange={e => setPoste(e.target.value)}
                />
              </div>
              <div className='margin'>
                <TextField
                  label='Sexe'
                  placeholder='Sexe'
                  fullWidth
                  required
                  value={sexe}
                  onChange={e => setSexe(e.target.value)}
                />
              </div>
              <div className='margin'>
                <TextField
                  type='Date'
                  label='Date de Naissance'
                  InputLabelProps={{
                    shrink: true
                  }}
                  fullWidth
                  required
                  value={dateNaisance}
                  onChange={e => setDateNaisance(e.target.value)}
                />
              </div>
              <div className='margin'>
                <Button type='submit' variant='contained' color='primary'>
                  Valider
                </Button>
              </div>
            </form>
          </Paper>
        </Grid>
        <Grid item xs={3} />
      </Grid>
    </Fragment>
  );
};
export default EmployeAdd;
