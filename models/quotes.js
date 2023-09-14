import mongoose from "mongoose";

const quotes = new mongoose.Schema({
  quote: {
    type: String,
    require: true,
  },
  by: {
    type: mongoose.Schema.Types.ObjectId,
    require: true,
  },
});

mongoose.model("Quotes", quote);
