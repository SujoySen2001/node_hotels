const mongoose = require('mongoose');
require('dotenv').config()
// Define the MongoDB connection URL

//const mongoURL = process.env.MONGODB_URL_LOCAL 
const mongoURL = process.env.MONGODB_URL

// Set up MongoDB Connection

mongoose.connect(mongoURL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    tls: true,
    tlsAllowInvalidCertificates: false,
    tlsVersion: 'TLSv1.2'  // Force TLSv1.2
})

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