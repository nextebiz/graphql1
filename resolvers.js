import { quotes, users } from "./mydata.js";
import { randomBytes } from "crypto";

const resolvers = {
  Query: {
    users: (usr) => {
      return users;
    },
    quotes: () => quotes,
  },
  User: {
    quotes: (usr) => {
      return quotes.filter((quote) => quote.by === usr.id);
    },
  },
  Mutation: {
    addUser: (_, { newUser }) => {
      const id = randomBytes(5).toString("hex");
      users.push({
        id,
        ...newUser,
      });
      return users.find((user) => user.id === id);
    },
    addQuoteByUserId: (_, { newQuote }) => {
      console.log(newQuote);
      quotes.push({ ...newQuote });
      return quotes;
    },
  },
};
export default resolvers;
