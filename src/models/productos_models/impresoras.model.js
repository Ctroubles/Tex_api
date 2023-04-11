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
        funciones:{
            type: String,
            required: true
        },            
        technology:{
            type: String,
            required: true
        },        
        conectividad:{
            type: String,
            required: true
        },         
        papel:{
            type: String,
            required: true
        },                
        tinta :{
            type: String,
            required: true
        },         
        cod:{
            type: String,
            required: true,
        }
    }
);

const Impresoras = model("Impresoras", componentSchema)

module.exports= Impresoras;