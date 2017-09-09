export const typeDefs = `
  type Menu {
    id: ID!
    name: String
  }

  type Query {
    options: [Menu]
  }
`;
