import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "https://eventually-alpha.herokuapp.com",
  // uri: "http://localhost:4000",

  /**
   * Configure the request to send the auth token with every request.
   */
  request: async operation => {
    const context = { headers: {} };

    // Add authorization token if it exists
    // TODO: get auth from local state.
    const token = "5ca91af6d3f97bf5e9f65753";
    if (token) {
      context.headers.authorization = token;
    }

    operation.setContext(context);
  }
});

export { client };
