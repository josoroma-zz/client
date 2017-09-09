import {typeDefs} from '../_schemas/AppSchema';

import {ApolloClient} from 'react-apollo';

import {
  makeExecutableSchema,
  addMockFunctionsToSchema
} from 'graphql-tools';

import { mockNetworkInterfaceWithSchema } from 'apollo-test-utils';

const schema = makeExecutableSchema({ typeDefs });

addMockFunctionsToSchema({ schema });

const mockNetworkInterface = mockNetworkInterfaceWithSchema({ schema });

export default new ApolloClient({
  networkInterface: mockNetworkInterface
});
