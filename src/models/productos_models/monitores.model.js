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
                return Number(value) * 1.14;
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
        tamaño:{
            type: String,
            required: true
        },          
        curvo:{
            type: Boolean,
            required: true
        },         
        proportion:{
            type: String,
            required: true
        },       
        resolution:{
            type: String,
            required: true
        },                
        respuesta:{
            type: String,
            required: true
        },         
        refresco:{
            type: String,
            required: true
        },                  
        entradas:{
            type: String,
            required: true
        },           
        screenType:{
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

const Monitores = model("Monitores", componentSchema)

module.exports= Monitores;