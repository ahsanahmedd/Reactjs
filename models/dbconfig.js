const mongoose = require("mongoose");

exports.dbconnection = async () =>{
    try{
        mongoose.connect(process.env.MONGO_URL);
        console.log("Connection established");
    } catch (error){
        console.log(error.message);
        }
}