import { gql } from "@apollo/client";

export const ADD_USER = gql`
  mutation addUser(
    $nom: String!
    $prenom: String!
    $email: String
    $password: String
    $level: Int
  ) {
    addUser(
      nom: $nom
      prenom: $prenom
      email: $email
      password: $password
      level: $level
    ) {
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

export const UPDATE_USER = gql`
  mutation updateUser(
    $id: ID!
    $nom: String
    $prenom: String
    $email: String
    $password: String
    $level: Int
  ) {
    updateUser(
      id: $id
      nom: $nom
      prenom: $prenom
      email: $email
      password: $password
      level: $level
    ) {
      id
      nom
      prenom
      email
      password
      level
      materiels {
        serie
        detail {
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
