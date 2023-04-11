const { Schema, model }= require("mongoose");
const mongooseDelete = require('mongoose-delete');

const usersSchema= new Schema(
    {
        isActive:{
            type: Boolean,
            default: true,
        },
        useridAuth0:{
            type: String,
            required:true,
        },
        email:{
            type: String,
            required: true,
            unique: true
        },
        name:{
            type: String,
            required:true,
        },
        surname:{
            type: String,
        },
        DNI:{
            type:String,
            required:false,
        },
        phoneNumber:{
            type: Number,
            required: false,
        },
        address:{
            type: String,
            required: false,
        },        
        texPoints:{
            type: Number,
            required: false,
        },
    },
    { timestamps: true }
);


usersSchema.plugin(mongooseDelete, { deletedAt: true, overrideMethods: 'all' });


const User= model("User", usersSchema) 

module.exports= User;