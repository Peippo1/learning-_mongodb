const mongoose = require("mongoose");

// creatig a schema

const personSchema = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
      type: String
    },
    age: {
        type: Number
    },
});
// model for schema
const Person = mongoose.model("person", personSchema);

// exporting the schema
module.exports = {
    Person,
};

