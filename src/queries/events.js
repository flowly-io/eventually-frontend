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

export const GET_EVENTS_BY_ME = gql`
  {
    eventsByMe {
      ...eventFields
    }
  }
  ${FIELDS_ON_EVENT}
`;

export const GET_EVENTS = gql`
  {
    events {
      ...eventFields
    }
  }
  ${FIELDS_ON_EVENT}
`;

export const GET_EVENT = gql`
  query($eventId: ID!) {
    event(eventId: $eventId) {
      ...eventFields
    }
  }
  ${FIELDS_ON_EVENT}
`;

export const GET_CAPABILITIES = gql`
  query {
    capabilities {
      _id
      name
      description
      checkpoints {
        description
      }
    }
  }
`;

export const CREATE_EVENT = gql`
  mutation($event: EventInput!) {
    createEvent(event: $event) {
      _id
      name
      organisers {
        firstname
        lastname
        email
      }
      audiences
      startDateTime
      endDateTime
      maxCapacity
    }
  }
`;
