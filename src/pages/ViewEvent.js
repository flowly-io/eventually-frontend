import events from "../mockData/events";
import { Query } from "react-apollo";
import React from "react";
import { GET_EVENT } from "../queries/events";

import ViewCard from "../components/ViewCard";

function ViewEvent({ match }) {
  const id = match.params.id;
  console.log(id);
  const eventQuery = GET_EVENT(id);
  return id ? (
    <Query query={eventQuery}>
      {({ loading, error, data }) => {
        if (loading) return "Loading...";
        if (error) return `Error! ${error.message}`;
        const { event } = data;
        console.log(data, event);
        return <ViewCard event={event} />;
      }}
    </Query>
  ) : (
    <div>Unknown Id</div>
  );
}

export default ViewEvent;
