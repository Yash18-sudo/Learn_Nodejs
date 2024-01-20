const mongoose = require('mongoose');


const mongoURL = "mongodb://127.0.0.1:27017/hotels"

//setup mongoDB connection
mongoose.connect(mongoURL,{
    useNewUrlParser : true,
    useUnifiedTopology : true,
    family: 4
});

//Get the default connection
//Mongoose maintains a default connection object representing the MongoDb connection

const db= mongoose.connection;

//Event listener for events

db.on('connected',()=>{
    console.log('Database connected')
})
db.on('error',(e)=>{
    console.log('Database Connection Error: ')
})
db.on('disconnected',()=>{
    console.log('Database disconnected')
})

//export the database connection

module.exports = db;