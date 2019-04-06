import React from "react";
import { Query } from "react-apollo";

import CircularProgress from "@material-ui/core/CircularProgress";

import ViewCard from "../components/ViewCard";

import { GET_EVENT } from "../queries/events";

import events from "../mockData/events";

function ViewEvent(/*{ match }*/) {
  /*
  const id = match.params.id;
  const eventQuery = GET_EVENT(id);
  return id ? (
    <Query query={eventQuery}>
      {({ loading, error, data }) => {
        if (loading) return <CircularProgress />;
        if (error) return `Error! ${error.message}`;
        const { event } = data;
        console.log(data, event);
        return <ViewCard event={event} />;
      }}
    </Query>
  ) : (
    <div>Unknown Id</div>
  );
  */

  return <ViewCard event={events[0]} />;
}

export default ViewEvent;
