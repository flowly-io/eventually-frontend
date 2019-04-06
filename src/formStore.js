import { action, autorun, observable } from "mobx";
import moment from "moment";

export let store = observable({
  name: undefined,
  startDate: undefined,
  endDate: undefined,
  audienceTypes: undefined,
  maxCapacity: undefined
});

let event = localStorage.getItem("event");
if (event !== null) {
  event = JSON.parse(event);
  action(function() {
    store.name = event.name;
    store.startDate = event.startDate;
    store.endDate = event.endDate;
    store.audienceTypes = event.audienceTypes;
    store.maxCapacity = event.audienceTypes;
  })();
}

export const clear = action(() => {});

export const setName = action(name => {
  store.name = name;
});

export const setDates = action((startDate, endDate) => {
  store.startDate = startDate.format(moment.ISO_8601());
  store.endDate = endDate.format(moment.ISO_8601());
});

export const setAudiences = action((audienceTypes, maxCapacity) => {
  store.audienceTypes = audienceTypes;
  store.maxCapacity = maxCapacity;
});

autorun(() => {
  localStorage.setItem("event", JSON.stringify(store));
  console.log(store.name);
});
