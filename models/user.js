//require mongoose
const mongoose = require("mongoose");
//create schema
const Schema = mongoose.Schema;
//create user Schema
const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },

    phone: Number,
  },
  { timestamps: true, collection: "users" }
);

//export model
module.exports = mongoose.model("User", userSchema);
 