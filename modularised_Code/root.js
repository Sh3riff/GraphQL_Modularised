const { gql } = require('apollo-server-express');

module.exports.Root = gql`
    type Query {
        root: String
    }
    type Mutation {
        root: String
    }
`;