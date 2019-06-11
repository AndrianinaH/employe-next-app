import gql from 'graphql-tag';

const ADD_FILE_ATTACHMENT = gql`
  mutation addFileAttachment(
    $name: String!
    $idEmploye: String!
    $urlFile: String!
  ) {
    addFileAttachment(name: $name, idEmploye: $idEmploye, urlFile: $urlFile) {
      id
      idEmploye
      name
      urlFile
    }
  }
`;

const UPDATE_FILE_ATTACHMENT = gql`
  mutation updateFileAttachment(
    $id: String!
    $nom: String!
    $prenom: String!
    $poste: String!
    $sexe: String!
    $dateNaissance: Date!
    $urlPhoto: String!
  ) {
    updateFileAttachment(
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

const DELETE_FILE_ATTACHMENT = gql`
  mutation deleteFileAttachment($id: String!) {
    deleteFileAttachment(id: $id) {
      id
    }
  }
`;

export { ADD_FILE_ATTACHMENT, UPDATE_FILE_ATTACHMENT, DELETE_FILE_ATTACHMENT };
