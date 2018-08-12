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

  type StoryEdge {
    node: Story!
    cursor: String!
  }

  type StoriesConnection {
    count: Int!
    edges: [StoryEdge]
    pageInfo: PageInfo
  }
`;

export default schema;
