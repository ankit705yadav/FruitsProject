const express = require("express")
const mongoose = require("mongoose")
const app = express()

//const uri = "mongodb+srv://ankit705yadav:kailash1ankit2@cluster0.h0mtwdh.mongodb.net/?retryWrites=true&w=majority"

async function connect(){
    try{
        await mongoose.connect("mongodb://0.0.0.0:27017/fruitsDB")
        console.log("connected to MongoDB")
    }catch(error){
        console.log(error)
    }
}

connect()

const fruitSchema = new mongoose.Schema({
    name: String,
    rating:Number,
    review:String
})

const Fruit = mongoose.model("fruit",fruitSchema) //fruit/fruits collection

const fruit = new Fruit ({
    name:"apple",
    rating:7,
    review:"solid"
})

fruit.save()

const personSchema = new mongoose.Schema({
    name:String,
    age:Number
})

const Person = mongoose.model("Person",personSchema)

const person = new Person({
    name:"Jhon",
    age: 37
})

person.save()

const kiwi = new Fruit({
    name:"kiwi",
    score:10,
    review:"aumsum"
})

const orange = new Fruit({
    name:"orange",
    score:6,
    review:"khatta"
})

const banana = new Fruit({
    name:"banana",
    score:9,
    review:"calcium"
})

// Fruit.insertMany([kiwi,orange,banana]);

//Fruit.find()


app.listen(8000,() =>{
    console.log("server started on port 8000")
});
























// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://ankit705yadav:kailash1ankit2@cluster0.h0mtwdh.mongodb.net/?retryWrites=true&w=majority";

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);




// const mongoose = require('mongoose')

// mongoose.connect("mongodb://127.0.0.1:27017/",{useNewUrlParser:true})





// const MongoClient = require("mongodb").MongoClient;
// const assert = require('assert');

// const url = "mongodb+srv://ankit705yadav:kailash1ankit2@cluster0.h0mtwdh.mongodb.net/?retryWrites=true&w=majority";

// const dbName = 'FruitsDB';

// const client = new MongoClient(url, { useNewUrlParser: true,useUnifiedTopology: true});

// client.connect(function(err){
//     assert.equal(null,err);
//     console.log("Connected sucessfully to server");

//     const db = client.db(dbName);

//     client.close();
// })

















// async function run() {
//   try {
//     const database = client.db('sample_mflix');
//     const movies = database.collection('movies');

//     // Query for a movie that has the title 'Back to the Future'
//     const query = { title: 'Back to the Future' };
//     const movie = await movies.findOne(query);

//     console.log(movie);
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);