const mongoose = require('mongoose');

// Define the MongoDB connection URL

const mongoURL = 'mongodb://127.0.0.1:27017/hotels'

// Set up MongoDB Connection

mongoose.connect(mongoURL)

// Get the default connection
// Mongoose maintains a default Connection
const db= mongoose.connection

// Define event listener for database connection
db.on('connected',()=>{
    console.log('Connected to MongoDB server');
})

db.on('error',(err)=>{
    console.log('Connection Error:',err);
})

db.on('disconnected',()=>{
    console.log('MongoDB Connection Disconnected');
})

// Export the database connection

module.exports=db