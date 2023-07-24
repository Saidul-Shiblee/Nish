import { gql } from 'apollo-server-micro';

const typeDefs = gql`
  type Query {
    blogs: [Blog!]!
  }
  type Blog {
    id: Int
    title: String
    image: String
    place:String
    description: String
    readUrl: String
    likes: String
    comments: String
    createdAt: String
    createdBy: String
  }
`;

export default typeDefs;