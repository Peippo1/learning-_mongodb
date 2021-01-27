const mongoose = require("mongoose");
// creating a schema

const taskSchema = new mongoose.Schema({
  task: {
    type: String,
    required: true,
  },

 completed: {
     type: Boolean,
     required: true,
 },
});

const Task = mongoose.model("Task", taskSchema);

// exporting the schema
module.exports = {
  Task,
};

// node ./models/Task.js
