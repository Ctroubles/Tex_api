const { Schema, model }= require("mongoose");

const componentSchema= new Schema(
    {
        name:{
            type: String,
            required: true,
        },
        marca:{
            type: String,
            required: true,
        },
        img:{
            type: String,
            required: true
        },
        price:{
            type: Number,
            required: true,
        },
        category:{
            type:String,
            require: true
        },
        stock:{
            type: Number,
            required: true
        },
        chipset:{
            type: String,
            required: true
        },        
        socket:{
            type: String,
            required: true
        },        
        ram:{
            type: String,
            required: true
        },        
        ramSlots:{
            type: Number,
            required: true
        },        
        conectividad:{
            type: String,
            required: true
        },        
        mDos:{
            type: String,
            required: true
        },                
        factor:{
            type: String,
            required: true
        },
        cod:{
            type:String,
            required:true
        }
    },
    {
        toJSON: {
            getters: true
        }
    },
);

const Motherboard = model("Motherboard", componentSchema);

module.exports= Motherboard;