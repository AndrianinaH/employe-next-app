import gql from 'graphql-tag';

const GET_ALL_FILE_ATTACHMENT = gql`
  query allFileAttachments($idEmploye: String!) {
    allFileAttachments(idEmploye: $idEmploye) {
      id
      idEmploye
      name
      urlFile
    }
  }
`;

const GET_FILE_ATTACHMENT_BY_ID = gql`
  query getFileAttachmentById($id: String!) {
    getFileAttachmentById(id: $id) {
      id
      idEmploye
      name
      urlFile
    }
  }
`;
export { GET_ALL_FILE_ATTACHMENT, GET_FILE_ATTACHMENT_BY_ID };
