import gql from "graphql-tag";

export const GET_MY_PROFILE = gql`
  query {
    me {
      _id
      firstname
      lastname
      email
      groups
    }
  }
`;
