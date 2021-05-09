import { gql } from "@apollo/client";

export const GET_ALL_USERS = gql`
  query {
    getAllUsers {
      id
      firstName
      lastName
      email
      password
    }
  }
`;

export const GET_CURRENT_USER = gql`
  query {
    me {
      id
      firstName
      lastName
      email
      password
    }
  }
`;