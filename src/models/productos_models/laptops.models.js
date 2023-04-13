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
            get: function (value) {
                return Number(value) + 300;
              }
        },
        category:{
            type:String,
            require: true
        },
        stock:{
            type: Number,
            required: true
        },          
        pantalla:{
            type: String,
            required: true
        },         
        procesador:{
            type: String,
            required: true
        },      
        RAM:{
            type: String,
            required: true
        },      
        Almacenamiento:{
            type: String,
            required: true
        },      
        graphics:{
            type: String,
            required: true
        },          
        conectividad:{
            type: String,
            required: true
        },           
        tecladoBacklit:{
            type: String,
            required: true
        },            
        os:{
            type: String,
            required: true
        },          
        fingerPrint:{
            type: String,
            required: true
        },      
        cod:{
            type: String,
            required: true
        },         
    }
);

const Laptops = model("Laptops", componentSchema)

module.exports= Laptops;