import React from "react";

import events from "../mockData/events"
import EventOverviewCard from "../components/EventOverviewCard";

function Home() {
   return events.map(event => <EventOverviewCard event={event} />);
}

export default Home;
