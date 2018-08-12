const schema = `
  type Story {
    by: String!
    descendants: ID
    id: ID!
    kids: [ID]
    score: Int!
    time: Date!
    title: String!
    type: String!
    url: String!
  }
`;

export default schema;
