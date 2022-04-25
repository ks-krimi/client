import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from
} from '@apollo/client'
import { onError } from '@apollo/client/link/error'
import axios from 'axios'
import Routes from './Routes'
import userContext from './hooks/UserContext'
import { useEffect, useState } from 'react'
import { CssBaseline } from '@material-ui/core'

const httpLink = new HttpLink({
  uri: 'http://localhost:8000/graphql'
})

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    )
  if (networkError) console.log(`[Network error]: ${networkError}`)
})

const link = from([errorLink, httpLink])

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link
})

function App() {
  const [token, setToken] = useState(null)

  useEffect(() => {
    const getToken = async () => {
      await axios({
        method: 'GET',
        url: `${process.env.REACT_APP_API_URL}jwtid`,
        withCredentials: true
      })
        .then((res) => {
          setToken(res.data)
        })
        .catch((err) => {
          setToken(null)
        })
    }
    getToken()
  }, [token])

  return (
    <ApolloProvider client={client}>
      <userContext.Provider value={token}>
        <Routes />
        <CssBaseline />
      </userContext.Provider>
    </ApolloProvider>
  )
}

export default App
