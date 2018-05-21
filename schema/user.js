export default `
    type User {
        id: Int!
        username: String!
        email: String!
        messages: Message!
        teams: [Team!]!
    }

    type Query {
        getUser(id: Int!): User!
        allUsers(id: Int!): [User!]!
    }

    type Mutation {
        register(username: String!, email: String!, password: String!): Boolean!
    }
`;
