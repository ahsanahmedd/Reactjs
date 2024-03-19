const mongoose = require("mongoose");

const userModel = new mongoose.Schema({
    username:{
        type:String,
        trim:true,
        required:[true,"username is required"],
        // match:[/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,"Please fill a valid username address"],
        minLength:[3,"username must be at least 3 characters"]
    },
    email:{
        type:String,
        lowercase:true,
        required:[true,"Email is reqiured"],
        match:[/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,"Please fill a valid email address"],
    },
    password:{
        type:String,
        required:[true,"Password is required"],
        minLength:[3, "Password must be atleast 3 characters"],
        maxLength:[15, "Password must be atmost 15 characters"]
    },
},
{timestamps:true}
);

const user = mongoose.model("user",userModel);

module.exports = user;