import gql from 'graphql-tag';
const GET_ALL_EMPLOYE = gql`
  query {
    allEmployes {
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

const GET_EMPLOYE_BY_ID = gql`
  query getEmployeById($id: String!) {
    getEmployeById(id: $id) {
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

export { GET_ALL_EMPLOYE, GET_EMPLOYE_BY_ID };
