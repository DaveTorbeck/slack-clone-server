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

    type RegisterResponse {
        ok: Boolean!
        user: User
        errors: [Error!]
    }

    type Mutation {
<<<<<<< HEAD
        register(username: String!, email: String!, password: String!): Boolean!
=======
        register(username: String!, email: String!, password: String!): RegisterResponse!
>>>>>>> develop
    }
`;
