import React from "react";
import InputComp from "./component/InputComp";
import ViewComp from "./component/ViewComp";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

const App = () => {
  const client = new ApolloClient({
    uri: "http://localhost:2244/api",
    cache: new InMemoryCache(),
  });
  return (
    <div>
      <ApolloProvider client={client}>
        <br />
        <br />
        <InputComp />
        <br />
        <ViewComp />
      </ApolloProvider>
    </div>
  );
};

export default App;
