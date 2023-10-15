const mongoose = require('mongoose');

const userSchema=new mongoose.Schema({
    __id:{
        autoIncrement:true,
        type:String
    },
    username:{
        type:String,
        required: true,
        primaryKey:true

    },
    email:{
        type:String,
        unique:true
        
    },
    password:String
    

})


module.exports=mongoose.model("user",userSchema)