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
        frecuencia:{
            type: String,
            required: true
        },            
        sensibilidad:{
            type: String,
            required: true
        },                 
        interfaz:{
            type: String,
            required: true
        },           
        intervalo:{
            type: String,
            required: true
        },                
        cod:{
            type: String,
            required: true,
        }
    }
);

const Microfono = model("Microfono", componentSchema)

module.exports= Microfono;