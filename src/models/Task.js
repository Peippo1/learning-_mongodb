const mongoose = require("mongoose");
const { default: validator } = require("validator");

// creatig a schema

const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    age: {
        type: Number,
        required: true
    },
    email: {
      type: String,
      required: true,
      validate(value) {
      if (!validator.isEmail(value)) {
          throw new Error("Invalid Email")
      }
    //   an if statement to validate 
        }
    },
});
await Task.save();

app();
// model for schema
const Task = mongoose.model("Task", TaskSchema);



// exporting the schema
module.exports = {
    Task,
};

// node ./models/Task.js
