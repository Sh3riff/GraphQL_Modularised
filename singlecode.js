const { gql } = require('apollo-server-express');
const { Users } = require('../_dummydata')
const { Posts } = require('../_dummydata')

const typeDefs = gql`
    type User {
        id: String!
        name: String!
        posts: [Post]
    }
    type Post {
        owner: String!
        post: String!
    }
    type Query{
        readUsers: [User]
        readUser(id: String!): User
        readPosts: [Post]
        readPost(owner: String!): [Post]
    }
    type Mutation{
        createUser(id: String! name: String!): User
    }
`;

const resolvers = {
    Query: {
        readUsers: () => Users,
        readUser: (parent, args) => Users.find(user => args.id === user.id),
        readPosts: () => Posts,
        readPost: (parent, args) => Posts.filter(post => args.owner === post.owner),
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

module.exports = {
    typeDefs,
    resolvers
}