import React, { Fragment } from 'react';
import {
  TableRow,
  TableCell,
  Button,
  withStyles,
  Avatar
} from '@material-ui/core';
import { Link } from '../../../../routes';
import { useMutation } from 'react-apollo-hooks';
import config from '../../../../config/config';
import * as mutation from '../../../../graphql/employe/mutation';
import * as query from '../../../../graphql/employe/query';

const styles = {
  avatar: {
    margin: 10,
    width: 60,
    height: 60
  }
};

const EmployeItem = props => {
  const { employe, classes } = props;

  const deleteEmploye = useMutation(mutation.DELETE_EMPLOYE);
  const removeEmploye = id => {
    deleteEmploye({
      update: (cache, mutationResult) => {
        const { allEmployes } = cache.readQuery({
          query: query.GET_ALL_EMPLOYE
        });
        cache.writeQuery({
          query: query.GET_ALL_EMPLOYE,
          data: { allEmployes: allEmployes.filter(i => i.id !== id) }
        });
      },
      variables: {
        id: id
      }
    });
  };

  return (
    <Fragment>
      <TableRow key={employe.id}>
        <TableCell>
          <Link route={`/employe-edit/${employe.id}`}>
            <a>
              <Avatar
                alt='Profil'
                src={`${config.uploadImageUri}/${employe.urlPhoto}`}
                className={classes.avatar}
              />
            </a>
          </Link>
        </TableCell>
        <TableCell>
          <Link route={`/employe-edit/${employe.id}`}>
            <a>{employe.nom}</a>
          </Link>
        </TableCell>
        <TableCell>
          <Link route={`/employe-edit/${employe.id}`}>
            <a>{employe.prenom}</a>
          </Link>
        </TableCell>
        <TableCell>
          <Link route={`/employe-edit/${employe.id}`}>
            <a>{employe.poste}</a>
          </Link>
        </TableCell>
        <TableCell>
          <Link route={`/employe-edit/${employe.id}`}>
            <a>{employe.sexe}</a>
          </Link>
        </TableCell>
        <TableCell>
          <Link route={`/employe-edit/${employe.id}`}>
            <a>{employe.dateNaissance}</a>
          </Link>
        </TableCell>
        <TableCell>
          <Button
            aria-label='Delete'
            variant='contained'
            color='secondary'
            onClick={() => removeEmploye(employe.id)}
          >
            Supprimer
          </Button>
        </TableCell>
      </TableRow>
    </Fragment>
  );
};

export default withStyles(styles)(EmployeItem);
