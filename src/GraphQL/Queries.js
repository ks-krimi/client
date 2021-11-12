import { gql } from "@apollo/client";

export const LOAD_USERS = gql`
  {
    users {
      id
      nom
      prenom
      fonction
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

export const LOAD_MATERIELS = gql`
  {
    materiels {
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

export const LOAD_DETAILS = gql`
  {
    details {
      id
      type
      marque
      materiels {
        id
        serie
        detail {
          id
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
  }
`;
