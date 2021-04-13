const graphql = require("graphql");
const UserType = require("./UserType");
const { GraphQLObjectType, GraphQLInt, GraphQLList } = graphql;

const Users = new GraphQLObjectType({
    name: "Users",
    fields: () => ({
        users: {type : new GraphQLList(UserType)},
        totalUsers: {type: GraphQLInt}
    })
})

module.exports = Users;