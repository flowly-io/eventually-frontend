import React from "react";
import { Query } from "react-apollo";

import ViewCard from "../components/ViewCard";

import { GET_EVENT } from "../queries/events";
import Loader from "../Loader";

function ViewEvent({ match }) {
  const id = match.params.id;
  return id ? (
    <Query
      query={GET_EVENT}
      variables={{ eventId: id }}
      fetchPolicy="network-only"
    >
      {({ loading, error, data }) => {
        if (loading) return <Loader />;
        if (error) return `Error! ${error.message}`;
        const { event } = data;
        return <ViewCard event={event} />;
      }}
    </Query>
  ) : (
    <div>Unknown Id</div>
  );
}

export default ViewEvent;
