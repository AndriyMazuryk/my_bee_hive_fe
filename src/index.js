import React from "react";
import ReactDOM from "react-dom";
import { Routes } from "./Routes";
import { ApolloProvider } from "@apollo/client/react";
import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { Provider } from "react-redux";

import store from "./redux/store";
import "./index.css";

const link = createHttpLink({
  uri: "http://localhost:4000/graphql",
  credentials: "include",
});

const client = new ApolloClient({ link, cache: new InMemoryCache() });

ReactDOM.render(
  <Provider store={store}>
    <ApolloProvider client={client}>
      <Routes />
    </ApolloProvider>
  </Provider>,
  document.getElementById("root")
);
