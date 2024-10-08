// const mongoose = require('mongoose');
import mongoose from 'mongoose';
// 'mongodb://localhost:27017/food-delevery'

 export const connectDB = async() => {
     await mongoose.connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("Database connected");
    })
    .catch((err) => {
        console.log('Error:', err);
    });
}

// module.exports = connectDB; 
// export {connectDB}


// const { MongoClient, ServerApiVersion } = require('mongodb');
// import MongoClient from 'mongodb'
// import ServerApiVersion from 'mongodb'
// const uri = "mongodb+srv://ritikkr1592000:<pTvHgJdttiYikVDX>@cluster0.8bsuk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function connectDB() {
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
// connectDB().catch(console.dir);

// export {connectDB}
