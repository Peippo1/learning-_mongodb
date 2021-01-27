const mongoose = require("mongoose");
const validator = require("validator");

// creating a schema

const personSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
      type: String,
      required: true,
      validate (value) {
        if (!validator.isEmail(value)) {
            throw new Error("Invalid Email")  
      } 
    },
},
age: {
    type: Number,
  },
});
// model for schema
const Person = mongoose.model("Person", personSchema);

// exporting the schema
module.exports = {
    Person,
};

