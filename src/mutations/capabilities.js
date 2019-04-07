import gql from "graphql-tag";

export const FIELDS_ON_EVENT = gql`
  fragment eventFields on Event {
    _id
    name
    description
    organisers {
      _id
      firstname
      lastname
    }
    audiences
    maxCapacity
    capabilities {
      _id
      name
      description
      checkpoints {
        description
        ... on TodoCheckpoint {
          done
        }
      }
      ... on CapabilityInstance {
        template {
          delegateGroups {
            name
          }
        }
      }
    }
    startDateTime
    endDateTime
  }
`;

export const ADD_CAPABILITY = gql`
mutation($eventId: ID!, $capabilityId: ID!) {
    addCapability(eventId: $eventId, capabilityId: $capabilityId) {
        ...eventFields
    }
}
  ${FIELDS_ON_EVENT}
`;

export const REMOVE_CAPABILITY = gql`
mutation($eventId: ID!, $capabilityId: ID!) {
    removeCapability(eventId: $eventId, capabilityId: $capabilityId) {
        ...eventFields
    }
}
  ${FIELDS_ON_EVENT}
`;