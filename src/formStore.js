import { action, autorun, observable } from "mobx";
import moment from "moment";

export let store = observable({
  name: undefined,
  description: undefined,
  startDateTime: undefined,
  endDateTime: undefined,
  maxCapacity: undefined
});

let event = localStorage.getItem("event");
if (event !== null) {
  event = JSON.parse(event);
  action(function() {
    store.name = event.name;
    store.description = event.description;
    store.startDateTime = event.startDateTime;
    store.endDateTime = event.endDateTime;
    store.maxCapacity = event.audienceTypes;
  })();
}

export const clear = action(() => {});

export const setName = action(name => {
  store.name = name;
});

export const setDescription = action(description => {
  store.description = description;
});

export const setDates = action((startDateTime, endDateTime) => {
  store.startDateTime = startDateTime.format(moment.ISO_8601());
  store.endDateTime = endDateTime.format(moment.ISO_8601());
});

export const setAudiences = action(maxCapacity => {
  store.maxCapacity = maxCapacity;
});

autorun(() => {
  localStorage.setItem("event", JSON.stringify(store));
});
