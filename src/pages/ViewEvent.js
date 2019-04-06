import events from "../mockData/events";

import React from "react";

import ViewCard from "../components/ViewCard";

function ViewEvent() {

  return <ViewCard event={events[0]} />;
}

export default ViewEvent