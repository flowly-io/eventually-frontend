import ApolloClient from "apollo-boost";

import {
  InMemoryCache,
  IntrospectionFragmentMatcher,
  defaultDataIdFromObject
} from "apollo-cache-inmemory";

import introspectionQueryResultData from "./fragmentTypes.json";

const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData
});

const cache = new InMemoryCache({
  fragmentMatcher,
  dataIdFromObject: object => {
    switch (object.__typename) {
      case "EventCapabilityInstance":
        return object.event.name;
      default:
        return defaultDataIdFromObject(object);
    }
  }
});

const client = new ApolloClient({
  cache,
  uri: "https://eventually-alpha.herokuapp.com",
  // uri: "http://localhost:4000",

  /**
   * Configure the request to send the auth token with every request.
   */
  request: async operation => {
    const context = { headers: {} };

    // Add authorization token if it exists
    // TODO: get auth from local state.
    const token = "5ca9281dd78acaff9d807ba3";
    if (token) {
      context.headers.authorization = token;
    }

    operation.setContext(context);
  }
});

export { client };
