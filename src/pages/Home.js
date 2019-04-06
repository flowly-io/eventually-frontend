import React from "react";

import EventOverviewCard from "../components/EventOverviewCard";

function Home() {
  return <DummyEvents />;
}

function DummyEvents() {
  const events = [
    {
      name: "Some other event",
      organisers: [
        {
          firstname: "Ben",
          lastname: "Yap"
        },
        {
          firstname: "Mariusz",
          lastname: "Skoneczko"
        }
      ],
      startDateTime: "Wed 6 April, 9:30am",
      endDateTime: "Wed 7 April, 3:30pm"
    },
    {
      name: "WIRED games night",
      organisers: [
        {
          firstname: "Eric",
          lastname: "Jiang"
        }
      ],
      startDateTime: "Wed 10 April, 6:30pm",
      endDateTime: "Wed 10 April, 8:30pm"
    }
  ];

  return events.map(event => <EventOverviewCard event={event} />);
}

export default Home;
