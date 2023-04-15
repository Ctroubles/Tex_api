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
        audioSys:{
            type: String,
            required: true
        }, 
        interfaz:{
            type: String,
            required: true
        },          
        conector:{
            type: String,
            required: true
        },         
          
        microfono:{
            type: Boolean,
            required: true
        },  
        RGB:{
            type: String,
            required: true
        },          
        audifonosType:{
            type: String,
            required: true
        },                                   
        cod:{
            type: String,
            required: true
        },         
    },
    {
        toJSON: {
            getters: true
        }
    }
);

const Audifonos = model("Audifonos", componentSchema)

module.exports= Audifonos;