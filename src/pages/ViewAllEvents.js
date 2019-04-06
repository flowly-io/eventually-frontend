import events from "../mockData/events";
import { Query } from "react-apollo";
import React from "react";
import { GET_EVENTS } from "../queries/events";

import ViewCard from "../components/ViewCard";
import { CircularProgress } from "@material-ui/core";

function ViewEvent() {
  return (
    <Query query={GET_EVENTS}>
      {({ loading, error, data }) => {
        if (loading) return <CircularProgress />;
        if (error) return `Error! ${error.message}`;
        const { events } = data;
        return events.map(event => <ViewCard event={event} />);
      }}
    </Query>
  );
}

export default ViewEvent;
