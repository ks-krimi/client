import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import axios from "axios";
import Routes from "./Routes";
import userContext from "./hooks/UserContext";
import { useEffect, useState } from "react";

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message, locations, path }) => {
      return console.log("graphQL message:", message);
    });
  }
});

const link = from([
  errorLink,
  new HttpLink({ uri: "http://localhost:8000/graphql" }),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const getToken = async () => {
      await axios({
        method: "GET",
        url: "http://localhost:8000/jwtid",
        withCredentials: true,
      })
        .then((res) => {
          setToken(res.data);
        })
        .catch((err) => {
          console.log("no token");
          setToken(null);
        });
    };
    getToken();
  }, [token]);

  return (
    <ApolloProvider client={client}>
      <userContext.Provider value={token}>
        <Routes />
      </userContext.Provider>
    </ApolloProvider>
  );
}

export default App;
