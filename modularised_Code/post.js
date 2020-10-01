const { gql } = require('apollo-server-express');
const { Posts } = require('../_dummydata')

module.exports.Post = gql`
    type Post {
        owner: String!
        post: String!
    }
    extend type Query{
        readPosts: [Post]
        readPost(owner: String!): [Post]
    }
`;

module.exports.postResolver = {
    Query: {
        readPosts: () => Posts,
        readPost: (parent, args) => Posts.filter(post => args.owner === post.owner),
    }
}