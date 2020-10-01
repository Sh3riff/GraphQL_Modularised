const { gql } = require('apollo-server-express');
const { Users } = require('../_dummydata')
const { Posts } = require('../_dummydata')

module.exports.User = gql`
    type User {
        id: String!
        name: String!
        posts: [Post]
    }
    extend type Query{
        readUsers: [User]
        readUser(id: String!): User
    }
    extend type Mutation{
        createUser(id: String! name: String!): User
    }
`;

module.exports.userResolver = {
    Query: {
        readUsers: () => Users,
        readUser: (parent, args) => Users.find(user => args.id === user.id)
    },
    Mutation:{
        createUser: (parent, args) => {
            let newUser = {
                id: args.id,
                name: args.name
            }
            Users.push(newUser)
            return newUser
        }
    },
    User:{
        posts: (parent) => Posts.filter(post => parent.id === post.owner)
    }
}