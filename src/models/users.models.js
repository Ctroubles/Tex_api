const { Schema, model }= require("mongoose");
const mongooseDelete = require('mongoose-delete');

const usersSchema= new Schema(
    {
        isActive:{
            type: Boolean,
            default: true,
        },
        verified:{
            type: Boolean,
            required:false,
            default:false,
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
        picture:{
            type: String,
            required: false,
        },
        name:{
            type: String,
            required:false,
        },
        surname:{
            type: String,
            required:false,
        },
        DNI:{
            type:String,
            required:false,
        },        
        birthday:{
            type:String,
            required:false,
        },
        phoneNumber:{
            type: Number,
            required: false,
        },
        region:{
            type: String,
            required: false,
        },        
        city:{
            type: String,
            required: false,
        },        
        address:{
            type: String,
            required: false,
        },        
        texPoints:{
            type: Number,
            default: 0,
            required: false,
        },
        purchaseOrders: [{ type: Schema.Types.ObjectId, ref: "PurchaseOrder" }],
    },
    { timestamps: true }
);


usersSchema.plugin(mongooseDelete, { deletedAt: true, overrideMethods: 'all' });


const User= model("User", usersSchema) 

module.exports= User;