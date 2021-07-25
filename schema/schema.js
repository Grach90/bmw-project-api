const { buildSchema } = require('graphql');

module.exports = buildSchema(`
    type AutopartType {
        title: String!,
        description: String!
    }

    type Query {
        autoparts: AutopartType
    }

    type Mutation {
        addAutopart(title: String!, description: String!): AutopartType
    }

`);






















// const graphql = require('graphql');
// const Autoparts = require('../modules/autopart');
// const cotegores = require('../modules/cotegory');

// const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID, GraphQLList } = graphql;


// const AutopartType = new GraphQLObjectType({
//     name: 'Autopart',
//     fields: () => ({
//         _id: { type: GraphQLID },
//         title: { type: GraphQLString },
//         description: { type: GraphQLString },
//         cotegory: {
//             type: CotegoryType,
//             resolve(parent, args) {
//                 return cotegores.findById(parent.cotegoryId);
//             }
//         }
//     })
// });

// const CotegoryType = new GraphQLObjectType({
//     name: 'Cotegory',
//     fields: {
//         _id: { type: GraphQLID },
//         name: { type: GraphQLString },
//         autoparts: {
//             type: new GraphQLList(AutopartType),
//             resolve(parent, args) {
//                 return Autoparts.find({ cotegoryId: parent._id });
//             }
//         }
//     }
// })

// const Mutation = new GraphQLObjectType({
//     name: 'Mutation',
//     fildes: {
//         addAutopart: {
//             type: AutopartType,
//             args: {
//                 title: { type: GraphQLString },
//                 description: { type: GraphQLString },
//                 cotegoryId: { type: GraphQLString }
//             },
//             resolve(parent, args) {
//                 const autopart = new Autoparts({
//                     title: args.title,
//                     description: args.description,
//                     cotegoryId: args.cotegoryId
//                 });
//                 autopart.save();
//             }
//         }
//     }
// });

// const Mutation = new GraphQLObjectType({
//     name: 'Mutation',
//     fildes: {
//         addCotegory: {
//             type: CotegoryType,
//             args: {
//                 name: { type: GraphQLString }
//             },
//             resolve(parent, args) {
//                 const cotegory = new Autoparts({
//                     name: args.name
//                 });
//                 cotegory.save();
//             }
//         }
//     }
// });


// const Query = new GraphQLObjectType({
//     name: 'Query',
//     fields: {
//         autopart: {
//             type: AutopartType,
//             args: { _id: { type: GraphQLID } },
//             resolve(parent, args) {
//                 return Autoparts.findById(args._id)
//             }
//         },
//         cotegory: {
//             type: CotegoryType,
//             args: { _id: { type: GraphQLID } },
//             resolve(parent, args) {
//                 return cotegores.findById(args._id)
//             }
//         },
//         cotegores: {
//             type: new GraphQLList(CotegoryType),
//             resolve() {
//                 return cotegores.find({});
//             }
//         },
//         autopartes: {
//             type: new GraphQLList(AutopartType),
//             resolve(prent, args) {
//                 return Autoparts.find({});
//             }
//         }
//     }
// });

// module.exports = new GraphQLSchema({
//     query: Query,
//     mutation: Mutation
// });