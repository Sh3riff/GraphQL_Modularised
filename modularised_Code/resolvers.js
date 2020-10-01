const merge = require('lodash.merge');

const { userResolver } =require('./user');
const { postResolver } =require('./post');

const rootuserResolver = {}

const resolvers = merge(rootuserResolver, userResolver, postResolver)
module.exports = resolvers

