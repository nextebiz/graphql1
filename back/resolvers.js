import { quotes, users } from "./mydata.js";

import { randomBytes } from "crypto";

const resolvers = {
  Query: {
    users: () => users,
    quotes: () => quotes,
    user: (_, args) => {
      console.log(args);
      return users.find((usr) => {
        console.log(usr);
        return usr.id === args.id;
      });
    },
    quotesByUser: (_, args) => {
      console.log(args);
      return quotes.filter((quote) => {
        return quote.by === args.by;
      });
    },
  },
  User: {
    quotes: (user) => quotes.filter((quote) => quote.by === user.id),
  },
  Mutation: {
    signupUser: (_, args) => {
      // const id = randomBytes(5).toString("hex");
      const id = 33;
      users.push({
        id,
        name: args.name,
        email: args.email,
      });
      return users.find((user) => user.id === id);
    },
    addQuoteById: (_, { quoteInput }) => {
      console.log(quoteInput);
      quotes.push({
        ...quoteInput,
      });
      return quotes.filter((quote) => quote.by === quoteInput.by);
    },
  },
};
export default resolvers;
