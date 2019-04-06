import gql from "graphql-tag";

export const GET_EVENTS = gql`
  {
    events {
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
          done
        }
      }
      startDateTime
      endDateTime
    }
  }
`;

export const GET_EVENT = eventId => {
  const q = `
    query {
      event(eventId: "${eventId}") {
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
            done
          }
        }
        startDateTime
        endDateTime
      }
    }
  `;
  console.log(q);
  return gql(q);
};

export const GET_EVENTS_BY_ME = gql`
  query {
    eventsByMe {
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
      }
      startDateTime
      endDateTime
    }
  }
`;
