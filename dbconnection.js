require('dotenv').config();
const mongoose = require("mongoose");
const Mongo_URL = process.env.DB_CONNECTION;
mongoose.set('debug', true);



let establishConnect = async ()=>{
    try {
        await mongoose.connect(Mongo_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Connected to MongoDB");
      
    } catch (err) {
        console.error("Error connecting to MongoDB:", err);
    }
};

module.exports = establishConnect;