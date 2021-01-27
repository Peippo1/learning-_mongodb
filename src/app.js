require("./db/connection");
const { Person } = require("./models/Person");
const { Task } = require("./models/Task");


const app = async () => {
    try{
    const person = new Person({name: "Dan", email: "dan@email.com", age: 35}); 
    // CREATE (add a document to your db collection)
    await person.save();

    const task = new Task ({ task:"Go for a run", duration: "30", completed: true });
    await task.save();

    const everything = await Person.find({});
    //READ (You can find one or many documents in your database)
    console.log(everything);

     //UPDATE (You can update individual documents or many at a time)

    //DELETE (You can delete many or individual items from your database)
    await Person.deleteMany();



    //Mongoose docs to queries
    //https://mongoosejs.com/docs/queries.html
} catch (error) {
    console.log (error)
    }
};
app();

// Above ^ function takes the new instance of this document and saves it. Super simple.

//  node ./src/app.js








// node src/app.js