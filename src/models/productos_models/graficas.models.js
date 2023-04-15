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
        capacity:{
            type: String,
            required: true,
        },   
        type:{
            type: String,
            required: true
        },  
        pci:{
            type: String,
            required: true
        },         
        interfaz:{
            type: String,
            required: false
        },    
           
        stock:{
            type: Number,
            required: true
        },
    },
    {
        toJSON: {
            getters: true
        }
    }
);

const Graficas = model("Graficas", componentSchema);

module.exports= Graficas;