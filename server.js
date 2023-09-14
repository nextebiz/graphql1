import { ApolloServer } from "apollo-server";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";

import typeDefs from "./typedefs.js";
import { MONGO_URL } from "./config.js";

import { Mongoose } from "mongoose";

const mongoose = new Mongoose();
mongoose.connect(MONGO_URL);

mongoose.connection.on("connected", () => {
  console.log("connected to mongo db");
});
mongoose.connection.on("error", () => {
  console.log("error connecting mongo db");
});

import resolvers from "./resolvers.js";

const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground],
});

server.listen().then(({ url }) => console.log(url));
