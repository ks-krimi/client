import { gql } from "@apollo/client";

export const ADD_USER = gql`
  mutation addUser($nom: String!, $prenom: String!) {
    addUser(nom: $nom, prenom: $prenom) {
      id
      nom
      prenom
      email
      password
      level
      materiels {
        id
        serie
        detail {
          id
          type
          marque
        }
      }
    }
  }
`;

export const DELETE_USER = gql`
  mutation deleteUser($userId: ID!) {
    deleteUser(userId: $userId) {
      id
    }
  }
`;

export const ADD_MATERIEL = gql`
  mutation addMateriel($serie: String!, $detailId: ID!) {
    addMateriel(serie: $serie, detailId: $detailId) {
      id
      serie
      detail {
        type
        marque
      }
      user {
        id
        nom
        prenom
      }
    }
  }
`;

export const DELETE_MATERIEL = gql`
  mutation deleteMateriel($materielId: ID!) {
    deleteMateriel(materielId: $materielId) {
      id
      serie
      detail {
        type
        marque
      }
      user {
        nom
        prenom
      }
    }
  }
`;

export const RENDRE_LIBRE_MATERIEL = gql`
  mutation updateMateriel($materielId: ID!, $userId: ID) {
    updateMateriel(id: $materielId, userId: $userId) {
      id
      serie
      detail {
        type
        marque
      }
      user {
        nom
        prenom
      }
    }
  }
`;

export const RENDRE_OCCUPER_MATERIEL = gql`
  mutation updateMateriel($materielId: ID!, $userId: ID) {
    updateMateriel(id: $materielId, userId: $userId) {
      id
      serie
      detail {
        type
        marque
      }
      user {
        nom
        prenom
      }
    }
  }
`;
