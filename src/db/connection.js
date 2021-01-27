// const { MongoClient }= require("mongodb");
const { mongoose } = require("mongoose");
// require("dotnv").config();

const connection = async () => {
// asynchronous function to contain mongodb call and awaiting connection
    try{
        await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("successfuly connected");
        // below is title of database and the data that is going to be stored there.
    }   catch (error) {
        console.log(error);
    }
};

connection();


// to run node src/db/connection.js

// const { MongoClient }= require("mongodb");

// const URI = "mongodb+srv://username:password@cluster0.iamlm.mongodb.net/tester?retryWrites=true&w=majority";

// const connection = async () => {
//     try {
//         const client = new MongoClient(URI, {useUnifiedTopology: true });
//         await client.connect();
//         console.log("successfully connected");
//         const db =client.db("people");
//         const collection = db.collection("emails");
//         await collection.insertOne({ email: "mrpanda@email.com"});

//         client.close();

//     }   catch (error) {
//         console.log(error);
//     }
// };

// connection();
