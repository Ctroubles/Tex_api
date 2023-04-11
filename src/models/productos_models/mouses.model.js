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
        botones:{
            type: Number,
            required: true
        },                 
        DPI:{
            type: String,
            required: true
        },       
        interfaz:{
            type: String,
            required: true
        },
        RGB:{
            type:String,
            required:true,
        },        
        programable:{
            type:String,
            required:true,
        },                           
        cod:{
            type: String,
            required: true
        },         
    }
);

const Mouses = model("Mouses", componentSchema)

module.exports= Mouses;