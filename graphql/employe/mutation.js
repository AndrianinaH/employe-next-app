import gql from 'graphql-tag';

export const ADD_EMPLOYE = gql`
  mutation addEmploye(
    $nom: String!
    $prenom: String!
    $poste: String!
    $sexe: String!
    $dateNaissance: Date!
    $urlPhoto: String!
  ) {
    addEmploye(
      nom: $nom
      prenom: $prenom
      poste: $poste
      sexe: $sexe
      dateNaissance: $dateNaissance
      urlPhoto: $urlPhoto
    ) {
      id
      nom
      prenom
      poste
      sexe
      dateNaissance
      urlPhoto
    }
  }
`;

export const UPDATE_EMPLOYE = gql`
  mutation updateEmploye(
    $id: String!
    $nom: String!
    $prenom: String!
    $poste: String!
    $sexe: String!
    $dateNaissance: Date!
    $urlPhoto: String!
  ) {
    updateEmploye(
      id: $id
      nom: $nom
      prenom: $prenom
      poste: $poste
      sexe: $sexe
      dateNaissance: $dateNaissance
      urlPhoto: $urlPhoto
    ) {
      id
      nom
      prenom
      poste
      sexe
      dateNaissance
      urlPhoto
    }
  }
`;

export const DELETE_EMPLOYE = gql`
  mutation deleteEmploye($id: String!) {
    deleteEmploye(id: $id) {
      id
    }
  }
`;
