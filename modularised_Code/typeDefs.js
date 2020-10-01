const { gql } = require('apollo-server-express');

const { Root } =require('./root');
const { User } =require('./user');
const { Post } =require('./post');

const typeDefs = [Root, User, Post]

module.exports = typeDefs