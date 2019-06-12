import React, { Fragment, useState, useEffect } from 'react';
import { Grid, Paper, TextField, Typography, Button } from '@material-ui/core';
import { useMutation, useQuery } from 'react-apollo-hooks';
import axios from 'axios';
import config from '../../../../config/config';
import * as mutation from '../../../../graphql/employe/mutation';
import { Router } from '../../../../routes';

const EditForm = props => {
  const { employe } = props;

  const [id, setId] = useState(employe.id);
  const [nom, setNom] = useState(employe.nom);
  const [prenom, setPrenom] = useState(employe.prenom);
  const [poste, setPoste] = useState(employe.poste);
  const [sexe, setSexe] = useState(employe.sexe);
  let dayNaissance = employe.dateNaissance.toString().slice(0, 10);
  const [dateNaisance, setDateNaisance] = useState(dayNaissance);
  //-------- load image from url
  const [urlPhoto, setUrlPhoto] = useState();

  const updateEmploye = useMutation(mutation.UPDATE_EMPLOYE);

  const uploadImageProfil = () => {
    console.log('Inside upload image profil');
    console.log(urlPhoto);
    //-------- si urlphoto est vide on passe a graphQL
    //-------- sinon on upload l'image avant de passer a graphQL
    if (!urlPhoto) {
      //--------- use graphql endpoint
      updateEmploye({
        variables: {
          id: id,
          nom: nom,
          prenom: prenom,
          poste: poste,
          sexe: sexe,
          dateNaissance: dateNaisance,
          urlPhoto: employe.urlPhoto
        }
      });
    } else {
      const data = new FormData();
      data.append('urlPhoto', urlPhoto);

      //------- use axio
      axios.post(config.uploadImageUri, data, {}).then(res => {
        console.log(res.statusText);
        //--------- use graphql endpoint
        updateEmploye({
          variables: {
            id: id,
            nom: nom,
            prenom: prenom,
            poste: poste,
            sexe: sexe,
            dateNaissance: dateNaisance,
            urlPhoto: urlPhoto.name
          }
        });
      });
    }
  };

  const handleSubmit = () => {
    uploadImageProfil();
    Router.pushRoute('/');
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
            Modifier un Employé
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={2} />
      <Grid item xs={2} />
      <Grid item xs={8}>
        <Paper className='papers'>
          <form onSubmit={() => handleSubmit()}>
            <div className='margin'>
              <input
                accept='image/*'
                type='file'
                onChange={e => setUrlPhoto(e.target.files[0])}
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
      <Grid item xs={2} />
    </Fragment>
  );
};
export default EditForm;
