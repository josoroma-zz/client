export const typeDefs = `
  type Menu {
    id: ID!
    name: String!
    route: String!
  }

  type Query {
    options: [Menu]
  }
`;
