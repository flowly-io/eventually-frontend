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

export const GET_GROUP_CAPABILITIES_AND_INSTANCES = gql`
  query($group: String!) {
    group(groupName: $group) {
      name
      capabilities {
        name
      }
      capabilityInstances {
        _id
        name
        ... on EventCapabilityInstance {
          event {
            _id
            name
          }
        }
      }
    }
  }
`;
