import './App.scss';
import Routes from './Routes';
import { HashRouter as Router } from 'react-router-dom';


import { ApolloClient, InMemoryCache, HttpLink, from, ApolloProvider } from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import 'bootstrap/dist/css/bootstrap.min.css'
import NavigationBar from './components/navbar';

const errorLink = onError(({ graphQLErrors }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message }) => {
      return alert(`GraphQL error ${message}`);
    });
  }
});

const link = from([
  errorLink,
  new HttpLink({ uri: "http://localhost:7000/myapi" }),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});


function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="App">
          <Routes />
          <NavigationBar></NavigationBar>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
