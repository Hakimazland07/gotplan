const graphql = require("graphql");
const { v4: uuidv4 } = require('uuid');
const { GraphQLObjectType, GraphQLSchema, GraphQLInt, GraphQLString, GraphQLList } = graphql;
let userData = require('../data/data.json');
const Users = require("./TypeDefs/Users");
const UserType = require('./TypeDefs/UserType')

const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        getAllUser: {
            type: new GraphQLList(UserType),
            args: { id: { type: GraphQLString } },
            resolve(parent, args) {
                return userData
            }
        },
        pagination: {
            type: Users,
            args: { first: { type: GraphQLInt }, offset: { type: GraphQLInt } },
            resolve(parent, args) {
                const totalUsers = userData.length;
                const rev = [...userData].reverse();
                console.log(rev)
                const users = args.first === undefined ? rev.slice(args.offset) : rev.slice(args.offset, args.offset + args.first);
                const result = {
                    users,
                    totalUsers
                }
                return result
            }
        },
        getGenders: {
            type : new GraphQLList(GraphQLString),
            args : { id : {type : GraphQLString}},
            resolve(parent,args){
                var m = userData.map(x=>x.gender).reduce((a,b)=>{
                    if(a.find(z =>z == b))
                        return a;
                    a.push(b)
                    return a;
                },[]);
                return  m;
            }
        }
    }
})
const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        createUser: {
            type: UserType,
            args: {
                firstName: { type: GraphQLString },
                lastName: { type: GraphQLString },
                email: { type: GraphQLString },
                gender: { type: GraphQLString },
                phoneNumber: { type: GraphQLString },
            },
            resolve(parent, args) {
                userData.push({
                    id: uuidv4(),
                    firstName: args.firstName,
                    lastName: args.lastName,
                    email: args.email,
                    gender: args.gender,
                    phoneNumber: args.phoneNumber
                });
                return args;
            }
        },
        findUser: {
            type: new GraphQLList(UserType),
            args: { firstName: { type: GraphQLString } },
            resolve(parents, args) {
                var search = args.firstName.toLocaleLowerCase();
                if (args.firstName) {
                    return userData.filter((data) => data.firstName.toLowerCase().indexOf(search) > -1)
                }
                return userData;
            }
        },
        deleteUser: {
            type: UserType,
            args: { id: { type: GraphQLString } },
            resolve(parent, args) {
                userData = userData.filter((data) => data.id !== args.id)
                return userData
            }
        },
        getUserById: {
            type: UserType,
            args: { id: { type: GraphQLString } },
            resolve(parent, args) {
                if (args.id) {
                    return userData.find((data) => data.id === args.id)
                }
                return userData
            }
        },
        updateUser: {
            type: UserType,
            args: {
                id: { type: GraphQLString },
                firstName: { type: GraphQLString },
                lastName: { type: GraphQLString },
                email: { type: GraphQLString },
                gender: { type: GraphQLString },
                phoneNumber: { type: GraphQLString }
            },
            resolve(parent, args) {
                var index = userData.findIndex(data => {
                    return data.id === args.id
                });
                userData[index].firstName = args.firstName;
                userData[index].lastName = args.lastName;
                userData[index].email = args.email;
                userData[index].gender = args.gender;
                userData[index].phoneNumber = args.phoneNumber;
                return userData[index]
            }
        },
        filterGender: {
            type: new GraphQLList(UserType),
            args: { gender: { type: GraphQLString } },
            resolve(parent, args) {
                return userData.filter((data) => data.gender === args.gender)
            }
        }
    }
})

module.exports = new GraphQLSchema({ query: RootQuery, mutation: Mutation })