import {
  ApolloClient,
  createNetworkInterface,
  toIdValue
} from 'react-apollo';

const networkInterface = createNetworkInterface({
  uri: 'http://localhost:4000/graphql'
});

networkInterface.use([{
  applyMiddleware(req, next) {
    setTimeout(next, 500);
  }
}]);

function dataIdFromObject (result) {
  if (result.__typename) {
    if (result.id !== undefined) {
      return `${result.__typename}:${result.id}`;
    }
  }
  return null;
}

const AppGraphQLClient = new ApolloClient({
  networkInterface,
  customResolvers: {
    Query: {
      post: (_, args) => {
        return toIdValue(
          dataIdFromObject({
            __typename: 'Post',
            id: args['id']
          })
        )
      }
    }
  },
  dataIdFromObject
});

export default AppGraphQLClient;
